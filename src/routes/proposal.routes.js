const express = require('express')
const proposalController = require('../controllers/proposal.controller')
const requestValidationMiddleware = require('../middlewares/request.validation.middleware')
const getProposalSchema = require('../validationSchema/proposal/getProposal.schema')
const getAiRecommendationSchema = require('../validationSchema/proposal/getAiRecommendation.schema')
const proposalRoutes = express.Router()

proposalRoutes.get('/', requestValidationMiddleware(getProposalSchema), proposalController.getAllProposal)
proposalRoutes.post('/vendor', proposalController.getVendorProposal)
proposalRoutes.post('/recommendations', requestValidationMiddleware(getAiRecommendationSchema), proposalController.getAiRecommendation)

module.exports = proposalRoutes