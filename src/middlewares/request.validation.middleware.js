const AppError = require("../utils/app.error")
const ERRORS = require("../utils/errorCodes")

const requestValidationMiddleware = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    })
    next()
  } catch (error) {
    console.log(">>>>>>>>>error in request validation middleware>>>>>>>>>>>>", error)
    const message = error.errors?.[0]?.message || "Invalid request"
    return next(
      new AppError(ERRORS.REQUEST_VALIDATION_ERROR, message)
    )
  }
}
module.exports = requestValidationMiddleware