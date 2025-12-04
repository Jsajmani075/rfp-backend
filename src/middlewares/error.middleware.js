function errorHandler(err, req, res, next) {
  console.log(">>>error handler>>>", err)

  const status = err.status || 500
  return res.status(status).json({
    success: false,
    message: err.message,
    statusCode: err.httpStatusCode,
    error: err.name,
    explanation: err.explanation
  })
}
module.exports = errorHandler
