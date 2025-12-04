const express = require('express')
const vendorController = require('../controllers/vendor.controller')
const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated')
const vendorRoutes = express.Router()

vendorRoutes.get('/', isAdminAuthenticated, vendorController.getAllVendor)
vendorRoutes.get('/:id', isAdminAuthenticated, vendorController.getVendorDetail)
vendorRoutes.put('/', isAdminAuthenticated, vendorController.updateVendor)
vendorRoutes.post('/', isAdminAuthenticated, vendorController.createVendor)

module.exports = vendorRoutes 