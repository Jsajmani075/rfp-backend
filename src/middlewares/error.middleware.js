const Logger = require("logger")

function errorHandler(err, req, res, next) {
  console.log(">>>error handler>>>", err)
  Logger.error({ message: err.message }, 'error in error handler middleware')

  const status = err.status || 500
  res.status(status).json({
    success: false,
    message: err.message
  })
}
module.exports = errorHandler