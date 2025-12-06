const getAllVendorHandler = require("../handlers/vendor/getAllVendor.handler")
const getVendorDetailsHandler = require("../handlers/vendor/getVendorDetails.Handler")
const ApiHelper = require("../utils/api.utils")

class vendorController {
  static async getAllVendor(req, res, next) {
    try {
      const response = await getAllVendorHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)

    }
    catch (err) {
      next(err)
    }
  }
  static async getVendorDetail(req, res, next) {
    try {
      const response = await getVendorDetailsHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)

    }
    catch (err) {
      next(err)
    }
  }

}
module.exports = vendorController
