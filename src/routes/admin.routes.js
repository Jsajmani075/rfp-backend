const express = require('express')
const adminController = require('../controllers/admin.controller')
const adminRouter = express.router()
adminRouter.post('/login', adminController.adminLogin)
module.exports = adminRouter