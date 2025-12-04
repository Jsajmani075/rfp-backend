const createRpfHandler = require("../handlers/rpf/createRpfHandler")
const getAllRpfHandler = require("../handlers/rpf/getAllRpf.handler")
const sendRpfDataHandler = require("../handlers/rpf/sendrpfHandler")
const updateRpfHandler = require("../handlers/rpf/updateRpfbyId.handler")
const ApiHelper = require("../utils/api.utils")

class rpfController {
  static async getAllrpf(req, res, next) {
    try {
      const response = await getAllRpfHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)
    } catch (error) {
      next(error)
    }
  }
  static async createrpf(req, res, next) {
    try {
      const response = await createRpfHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)
    } catch (error) {
      next(error)
    }
  }
  static async updaterpf
    (req, res, next) {
    try {
      const response = await updateRpfHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)
    } catch (error) {
      next(error)
    }
  }
  static async sendRpf(req, res, next) {
    try {
      console.log(">>>>>>>>>>>>>", req.query)
      const response = await sendRpfDataHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)
    } catch (error) {
      next(error)
    }
  }


}
module.exports = rpfController 