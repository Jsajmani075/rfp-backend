const db = require("../../../models");
const ApiHelper = require("../../utils/api.utils");
const { CACHE_KEYS } = require("../../utils/public.constants");
const { getCache, setCache, deleteByPattern } = require("../../utils/redis");

const getAllProposalHandler = async (request) => {
  const { query } = request;
  const { id } = query;

  const { offset, limit, pageNo } = ApiHelper.getPagination(query.pageNo, query.limit);

  const cacheKeys = `${CACHE_KEYS.PROPOSALS}_${pageNo}_${offset}`
  const proposalCache = await getCache(cacheKeys)
  if (proposalCache) {
    const parsedData = JSON.parse(proposalCache);
    return { success: true, response: parsedData };
  }
  const sqlQuery = `
    SELECT  
      p.ai_response AS "aiResponse",
      p.ai_rank AS "aiRank",
      p.rpf_id AS "rpfId",
      p.email_body_content AS "emailContent",
      p.status AS "proposalStatus",
      v.vendor_name AS "vendorName",
      v.vendor_email AS "vendorEmail"
    FROM "proposals" p 
    JOIN "vendors" v ON p.vendor_id = v.id 
    WHERE p.rpf_id = :id
    ORDER BY p.ai_rank ASC
    LIMIT :limit OFFSET :offset
  `;

  const totalCountQuery = `
    SELECT COUNT(*) AS "total"
    FROM "proposals"
    WHERE rpf_id = :id
  `;

  const [proposalData, countResult] = await Promise.all([
    db.sequelize.query(sqlQuery, {
      type: db.Sequelize.QueryTypes.SELECT,
      replacements: { id, offset, limit }
    }),

    db.sequelize.query(totalCountQuery, {
      type: db.Sequelize.QueryTypes.SELECT,
      replacements: { id }
    })
  ]);

  const total = Number(countResult[0].total);
  const totalPages = Math.ceil(total / limit);
  const response = {
    proposalData,
    total,
    totalPages,
    limit,
    pageNo: Number(query.pageNo) || 1
  }
  await setCache(cacheKeys, JSON.stringify(response))
  return {
    success: true,
    response
  };
};

module.exports = getAllProposalHandler;
