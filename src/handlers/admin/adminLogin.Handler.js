const db = require("../../../models")
const { User } = require("../../../models");
const { comparePassword, createAccessToken } = require("../../helpers/authentication.helper")
const AppError = require("../../utils/app.error")
const ERRORS = require("../../utils/errorCodes")

const adminLoginHandler = async (request) => {
  const { body, query } = request
  const { username, password } = body

  const checkUser = await db.User.findOne({
    where: { username: username },
    attributes: ['id', 'username', 'email', 'password']
  })

  if (!checkUser) throw new AppError(ERRORS.USER_NOT_FOUND)

  const isPasswordValid = await comparePassword(password, checkUser.password)

  if (!isPasswordValid) throw new AppError(ERRORS.WRONG_PASSWORD)

  const accessToken = await createAccessToken(checkUser)
  console.log(">>>accessToken>>>>>>", accessToken)
  return { success: true, accessToken }
}
module.exports = adminLoginHandler
