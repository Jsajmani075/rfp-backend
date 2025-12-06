const db = require("../../../models")
const AppError = require("../../utils/app.error")
const ERRORS = require("../../utils/errorCodes")


const getVendorDetailsHandler = async (request) => {
  const { body, query, params } = request
  const { id } = request.params
  const vendorData = await db.Vendor.findOne({
    where: { id },
    attributes: ['id', 'vendorName',
      'vendorEmail',
      'tags'],
  })
  if (!vendorData) throw new AppError(ERRORS.VENDOR_NOT_EXIST)
  return { success: true, vendorData }
}
module.exports = getVendorDetailsHandler