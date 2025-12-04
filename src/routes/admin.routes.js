const express = require('express')
const adminController = require('../controllers/admin.controller')
const adminRouter = express.Router()
adminRouter.post('/login', (req, res, next) => {
  console.log(">>>>>>>>>.request aai yaha")
  next()
}, adminController.adminLogin)
module.exports = adminRouter