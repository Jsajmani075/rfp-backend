const { AppError } = require("../../utils/app.error")
const ERRORS = require("../../utils/errorCodes")

const createVendorHandler = async (body, query, params) => {
  try {
    const { name, email, type } = req.body
    const checkVendor = await Vendor.findOne({
      where: name,
      attributes: ['id', 'email', 'name']
    })
    if (checkVendor) throw new AppError(ERRORS.VENDOR_ALREADY_EXIST)
    const createVendor = await Vendor.create({
      name,
      email,
      type
    })

    return { success: true, message: 'vendor created Successfully' }
  } catch (error) {

  }
}
module.exports = createVendorHandler