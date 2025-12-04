const db = require("../../../models")
const ApiHelper = require("../../utils/api.utils")

const getAllVendorHandler = async (request) => {
  const { body, query, params } = request
  const { offset, limit, pageNo } = ApiHelper.getPagination(query.pageNo, query.limit)
  const vendorData = await db.Vendor.findAndCountAll({
    attributes: ['id', 'vendorName',
      'vendorEmail',
      'type',
      'isActive',
      'tags'],
    limit,
    offset
  })
  return { success: true, vendorData }
}
module.exports = getAllVendorHandler