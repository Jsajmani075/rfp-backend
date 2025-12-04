const db = require("../../../models")
const AppError = require("../../utils/app.error")
const ERRORS = require("../../utils/errorCodes")

const updateRpfHandler = async (request) => {
  const { body, query, params } = request
  const { id, rpfType,
    status,
    budgetTotal,
    deliveryTimelineDays,
    paymentTerms } = body
  const rpfData = await db.Rpf.findOne({
    where: { id },
    attributes: ['id', 'rpfType',
      'status',
      'budgetTotal',
      'deliveryTimelineDays',
      'paymentTerms']
  })
  if (!rpfData) throw new AppError(ERRORS.RPF_NOT_EXIST)
  if (rpfType) vendorData.rpfType = rpfType
  if (status) vendorData.status = status
  if (budgetTotal) vendorData.budgetTotal = budgetTotal
  if (deliveryTimelineDays) vendorData.deliveryTimelineDays = deliveryTimelineDays
  if (paymentTerms) vendorData.paymentTerms = paymentTerms

  await rpfData.save()
  return { success: true, message: 'rpf updated successfully' }
}
module.exports = updateRpfHandler