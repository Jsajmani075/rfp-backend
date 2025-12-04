const createVendorHandler = require("../handlers/vendor/createVendor.handler")
const getAllVendorHandler = require("../handlers/vendor/getAllVendor.handler")
const getVendorDetailsHandler = require("../handlers/vendor/getVendorDetails.Handler")
const updateVendorHandler = require("../handlers/vendor/updateVendorById.handler")
const ApiHelper = require("../utils/api.utils")

class vendorController {
  static async getAllVendor(req, res, next) {
    try {
      const response = await getAllVendorHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)
    } catch (error) {
      next(error)
    }
  }
  static async getVendorDetail(req, res, next) {
    try {
      const response = await getVendorDetailsHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)
    } catch (error) {
      next(error)
    }
  }

  static async updateVendor(req, res, next) {
    try {
      const response = await updateVendorHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)

    } catch (error) {
      next(error)
    }
  }
  static async createVendor(req, res, next) {
    try {
      const response = await createVendorHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)
    } catch (error) {
      next(error)
    }
  }
}
module.exports = vendorController 