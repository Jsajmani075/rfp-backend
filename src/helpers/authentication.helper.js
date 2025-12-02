const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const comparePassword = async (password, userPassword) => {
  if (!password) return false
  const result = await bcrypt.compare(password, userPassword)
  return result
}
const createAccessToken = async (user) => {
  const tokenExpiry = process.env.TOKEN_EXPIRY
  const accessToken = jwt.sign(
    {
      userId: user.userId,
      username: user.username
    }, secretKey, {
    expiresIn: tokenExpiry
  }
  )
  return accessToken;

}
module.exports = { comparePassword, createAccessToken }