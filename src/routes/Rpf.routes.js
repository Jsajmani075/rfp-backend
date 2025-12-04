const express = require('express')
const rpfController = require('../controllers/rpf.controller')
const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated')
const rpfRoutes = express.Router()

rpfRoutes.get('/', isAdminAuthenticated, rpfController.getAllrpf)
rpfRoutes.post('/', isAdminAuthenticated, rpfController.createrpf)
rpfRoutes.put('/', isAdminAuthenticated, rpfController.updaterpf)
rpfRoutes.get('/send', rpfController.sendRpf)

module.exports = rpfRoutes