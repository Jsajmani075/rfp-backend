
const getairecomendationHandler = require("../handlers/proposal/getAiRecomendation.handler")
const getAllProposalHandler = require("../handlers/proposal/getAllProposal.Handler")
const getVendorProposal = require("../handlers/proposal/getVendorProposal.handler")
const ApiHelper = require("../utils/api.utils")

class proposalController {
  static async getAllProposal(req, res, next) {
    try {
      const response = await getAllProposalHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)

    }
    catch (err) {
      next(err)
    }
  }
  static async getVendorProposal(req, res, next) {
    try {
      const response = await getVendorProposal({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)
    }
    catch (err) {
      next(err)
    }
  }
  static async getAiRecommendation(req, res, next) {
    try {
      const response = await getairecomendationHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)
    }
    catch (err) {
      next(err)
    }
  }
}
module.exports = proposalController
