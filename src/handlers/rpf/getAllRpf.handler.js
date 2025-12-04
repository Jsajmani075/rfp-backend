const db = require("../../../models")
const ApiHelper = require("../../utils/api.utils")

const getAllRpfHandler = async (request) => {
  const { body, query, params } = request
  const { offset, limit, pageNo } = ApiHelper.getPagination(query.pageNo, query.limit)
  const rpfData = await db.Rpf.findAndCountAll({
    attributes: ['id', 'userText', 'title', 'aiResponse', 'status', 'rpfType'],
    limit,
    offset
  })
  return { success: true, rpfData }
}
module.exports = getAllRpfHandler