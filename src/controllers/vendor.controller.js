const createVendorHandler = require("../handlers/vendor/createVendor.handler")
const { ApiHelper } = require("../utils/api.utils")

class vendorController {
  static async getVendor(req, res, next) {
    try {
      const response = await getAllVendorHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse(response)
    } catch (error) {
      next(error)
    }
  }
  static async updateVendor(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  static async createVendor(req, res, next) {
    try {
      const response = await createVendorHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse(response)
    } catch (error) {
      next(error)
    }
  }
}
module.exports = vendorController 