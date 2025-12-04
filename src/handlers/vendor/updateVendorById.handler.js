const db = require("../../../models")
const AppError = require("../../utils/app.error")
const ERRORS = require("../../utils/errorCodes")

const updateVendorHandler = async (request) => {
  const { body, query, params } = request
  const { id, vendorName,
    vendorEmail,
    type,
    isActive,
    tags } = body
  const vendorData = await db.Vendor.findOne({
    where: { id },
    attributes: ['id', 'vendorName', 'vendorEmail', 'isActive', 'type',
      'isActive',
      'tags']
  })
  if (!vendorData) throw new AppError(ERRORS.VENDOR_NOT_EXIST)
  if (vendorName) vendorData.vendorName = vendorName
  if (vendorEmail) vendorData.vendorEmail = vendorEmail
  if (isActive !== 'undefined') vendorData.isActive = isActive
  if (type) vendorData.type = type
  if (tags) vendorData.tags = tags

  await vendorData.save()
  return { success: true, message: 'vendor updated successfully' }
}
module.exports = updateVendorHandler