const db = require("../../../models")
const ApiHelper = require("../../utils/api.utils")
const { CACHE_KEYS } = require("../../utils/public.constants")
const { getCache, setCache, } = require("../../utils/redis")

const getAllVendorHandler = async (request) => {
  const { body, query, params } = request
  const { offset, limit, pageNo } = ApiHelper.getPagination(query.pageNo, query.limit)
  const cacheKey = `${CACHE_KEYS.VENDOR}_${pageNo}_${offset}`
  const vendorCache = await getCache(cacheKey)

  if (vendorCache) {
    const parsedData = JSON.parse(vendorCache);
    return { success: true, response: parsedData };
  }

  const vendorData = await db.Vendor.findAndCountAll({
    attributes: ['id', 'vendorName',
      'vendorEmail',
      'tags'],
    limit,
    offset
  })

  const response = {
    totalPages: Math.ceil(vendorData.count / limit),
    limit,
    vendorData
  }

  await setCache(cacheKey, JSON.stringify(response))
  return { success: true, response }
}
module.exports = getAllVendorHandler