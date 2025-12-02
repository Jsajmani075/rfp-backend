class AppError extends Error {
  constructor(name, message, explanation, code, httpStatusCode) {
    super(message)
    this.name = name
    this.message = message
    this.explanation = explanation
    this.code = code
    this.httpStatusCode = httpStatusCode
  }

  toResponse() {
    return {
      statusCode: this.httpStatusCode,
      error: this.name,
      message: this.message,
      code: this.code,
      explanation: this.explanation
    }
  }
}
module.exports = AppError