const AppError = require("../../utils/app.error")
const ERRORS = require("../../utils/errorCodes")

const updateVendorHandler = async (body, query, params) => {

  const vendorData = await Vendor.fidnOne({
    where: { name },
    attributes: ['id', 'name', 'email', 'isActive']
  })
  if (!vendorData) throw new AppError(ERRORS.VENDOR_NOT_EXIST)
  if (name) vendorData.name = name
  if (email) vendorData.email = email
  if (isActive)
    await vendorData.save()
  return { success: true, vendorData }
}