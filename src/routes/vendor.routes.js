const express = require('express')
const vendorController = require('../controllers/vendor.controller')
const requestValidationMiddleware = require('../middlewares/request.validation.middleware')
const getVendorDetailSchema = require('../validationSchema/vendor/getVendorDetail.schema')
const noValidation = require('../validationSchema/novalidation.schema')
const vendorRoutes = express.Router()

vendorRoutes.get('/', requestValidationMiddleware(noValidation), vendorController.getAllVendor)
vendorRoutes.get('/:id', requestValidationMiddleware(getVendorDetailSchema), vendorController.getVendorDetail)


module.exports = vendorRoutes 