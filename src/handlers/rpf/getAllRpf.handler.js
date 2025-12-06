const db = require("../../../models");
const ApiHelper = require("../../utils/api.utils");
const { CACHE_KEYS } = require("../../utils/public.constants");
const { getCache, setCache } = require("../../utils/redis");

const getAllRpfHandler = async (request) => {
  const { query } = request;

  const { offset, limit, pageNo } = ApiHelper.getPagination(query.pageNo, query.limit);

  const cacheKey = `${CACHE_KEYS.RPF}_${pageNo}_${offset}`;

  const cached = await getCache(cacheKey);

  if (cached) {
    const parsedData = JSON.parse(cached);
    return { success: true, response: parsedData };
  }

  const rpfData = await db.Rpf.findAndCountAll({
    attributes: ["id", "userText", "aiResponse", "status"],
    order: [['id', 'DESC']],
    limit,
    offset,
  });

  const response = {
    totalPages: Math.ceil(rpfData.count / limit),
    limit,
    rpfData,
  };
  await setCache(cacheKey, JSON.stringify(response), 300);

  return { success: true, response };
};

module.exports = getAllRpfHandler;
