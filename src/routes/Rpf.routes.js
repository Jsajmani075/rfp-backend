const express = require('express')
const rpfController = require('../controllers/rpf.controller')
const rpfRoutes = express.Router()

rpfRoutes.get('/', rpfController.getrpf)
rpfRoutes.put('/', rpfController.updaterpf)
rpfRoutes.post('/', rpfController.createrpf)

module.exports = rpfRoutes