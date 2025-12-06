const db = require("../../../models");
const extractEmail = require("../../helpers/regrex.helpers");
const { RPF_STATUS_CONSTANTS, PROPOSAL_STATUS_CONSTANTS, CACHE_KEYS } = require("../../utils/public.constants");
const { deleteByPattern } = require("../../utils/redis");

const getVendorProposal = async (req) => {
  const vendorResponse = req.body;

  let { vendorEmail, subject, message } = vendorResponse;

  const match = subject.match(/rpf\s*#\s*(\d+)/i);
  const rpfId = match ? Number(match[1]) : null;
  vendorEmail = extractEmail(vendorEmail);

  const [checkVendor, checkRpf] = await Promise.all([
    db.Vendor.findOne({
      where: { vendorEmail: vendorEmail },
      attributes: ["id"]
    }),
    db.Rpf.findOne({
      where: { id: rpfId },
      attributes: ["id", 'status']
    }),
  ])
  if (!checkVendor) {
    return { success: true, message: 'no vendor found' }
  }
  if (!checkRpf) {
    return { success: true, message: 'no rpf found' }
  }
  checkRpf.status = RPF_STATUS_CONSTANTS.VENDOR_PROPOSAL
  await Promise.all([
    db.Proposal.create({
      vendor_id: checkVendor.id,
      rpfId: rpfId,
      emailBodyContent: message,
      status: PROPOSAL_STATUS_CONSTANTS.VENDOR_PROPOSAL
    }),
    checkRpf.save(),
    deleteByPattern(`${CACHE_KEYS.RPF}__*`),
    deleteByPattern(`${CACHE_KEYS.PROPOSALS}__*`)
  ])

  return { success: true };
};

module.exports = getVendorProposal;
