const AppError = require("./app.error")
const ERRORS = require("./errorCodes")

class ApiHelper {
  static getPagination(pageNo = 1, limit = 2) {
    pageNo = Math.max(1, Number(pageNo) || 1)
    limit = Math.max(1, Number(limit) || 10)
    return { offset: (pageNo - 1) * limit, limit, pageNo }
  }

  static sendResponse({ req, res, next }, data) {
    console.log(">>>>>>data line 9", data)
    try {
      if (data) {
        res.payload = { data, error: [] }
        const statusCode = res.statusCode || 200
        res.status(statusCode).json(res.payload)
      }
      else {
        console.log(">>>>>>error in send response ")
        return res.status(400).json({ success: false, message: "Empty response" })

      }
    } catch (error) {
      throw new AppError(ERRORS.INTERNAL_SERVER_ERROR)
    }
  }
}
module.exports = ApiHelper