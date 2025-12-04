const ERRORS = require("../../utils/errorCodes")
const db = require("../../../models")
const AppError = require("../../utils/app.error")

const createVendorHandler = async (request) => {

  const { body, query, params } = request
  const { name, email, type } = body

  const checkVendor = await db.Vendor.findOne({
    where: { vendorName: name },
    attributes: ['id', 'vendorEmail', 'vendorName']
  })


  if (checkVendor) throw new AppError(ERRORS.VENDOR_ALREADY_EXIST)
  const createVendor = await db.Vendor.create({
    vendorName: name,
    vendorEmail: email,
    type
  })

  return { success: true, message: 'vendor created Successfully' }
}

module.exports = createVendorHandler