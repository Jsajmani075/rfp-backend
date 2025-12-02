const { comparePassword, comparePassword, createAccessToken } = require("../../helpers/authentication.helper")
const AppError = require("../../utils/app.error")
const ERRORS = require("../../utils/errorCodes")

const adminLoginHandler = async () => {
  const checkUser = await User.findOne({
    where: { username },
    attributes: ['id', 'username', 'email', 'password']
  })
  if (!checkUser) throw new AppError(ERRORS.USER_NOT_FOUND)

  const isPasswordValid = await comparePassword(password, checkUser.password)

  if (!isPasswordValid) throw new AppError(ERRORS.WRONG_PASSWORD)

  const accessToken = await createAccessToken(checkUser)

  return { success: true, accessToken }
}
module.exports = adminLoginHandler