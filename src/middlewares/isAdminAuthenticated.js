const AppError = require("../utils/app.error")
const ERRORS = require("../utils/errorCodes")
const jwt = require('jsonwebtoken')
require('dotenv').config();

const isAdminAuthenticated = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization?.split('Bearer ')[1]
    if (!accessToken) {
      return next(new AppError(ERRORS.UN_AUTHORIZE))
    }
    const secretKey = process.env.JWT_SECRET_KEY
    const decodeToken = jwt.verify(accessToken, secretKey)
    // req.body.username = decodeToken?.username
    next()
  }

  catch (err) {
    console.log(">>>>>>>>>.error in middleware", err)
    next(new AppError(ERRORS.INVALID_TOKEN))
  }
}
module.exports = isAdminAuthenticated