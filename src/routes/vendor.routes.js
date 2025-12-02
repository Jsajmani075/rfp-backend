const express = require('express')
const vendorController = require('../controllers/vendor.controller')
const vendorRoutes = express.Router()

vendorRoutes.get('/', vendorController.getVendor)
vendorRoutes.put('/', vendorController.updateVendor)
vendorRoutes.post('/', vendorController.createVendor)

module.exports = vendorRoutes 