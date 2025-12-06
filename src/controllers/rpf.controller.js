const createRpfHandler = require("../handlers/rpf/createRpfHandler")
const getAllRpfHandler = require("../handlers/rpf/getAllRpf.handler")
const sendRpfDataHandler = require("../handlers/rpf/sendRpf.Handler")
const ApiHelper = require("../utils/api.utils")

class rpfController {
  static async getrpf(req, res, next) {
    try {
      const response = await getAllRpfHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)
    }
    catch (err) {
      next(err)
    }
  }

  static async createrpf(req, res, next) {
    try {
      const response = await createRpfHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)

    }
    catch (err) {
      next(err)
    }
  }
  static async sendRpf(req, res, next) {
    try {
      const response = await sendRpfDataHandler({ body: req.body, query: req.query, params: req.params })
      ApiHelper.sendResponse({ req, res, next }, response)
    }
    catch (err) {
      next(err)
    }
  }
}
module.exports = rpfController
