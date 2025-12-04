const adminLoginHandler = require("../handlers/admin/adminLogin.Handler")
const ApiHelper = require("../utils/api.utils")

class adminController {
  static async adminLogin(req, res, next) {
    try {
      const response = await adminLoginHandler({ body: req.body, query: req.query })
      console.log(">>>>>response>>>>>>", response)
      ApiHelper.sendResponse({ req, res, next }, response)
    }
    catch (err) {
      throw (err)
    }
  }
}
module.exports = adminController