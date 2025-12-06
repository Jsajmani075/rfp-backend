const express = require('express')
const rpfController = require('../controllers/rpf.controller')
const requestValidationMiddleware = require('../middlewares/request.validation.middleware')
const createrpfSchema = require('../validationSchema/rpf/createRpf.schema')
const sendrpfSchema = require('../validationSchema/rpf/sendRpf.schema')
const noValidation = require('../validationSchema/novalidation.schema')
const rpfRoutes = express.Router()

rpfRoutes.get('/', requestValidationMiddleware(noValidation), rpfController.getrpf)
rpfRoutes.post('/', requestValidationMiddleware(createrpfSchema), rpfController.createrpf)
rpfRoutes.post('/send', requestValidationMiddleware(sendrpfSchema), rpfController.sendRpf)

module.exports = rpfRoutes