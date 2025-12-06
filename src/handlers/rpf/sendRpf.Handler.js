const db = require("../../../models");
const { sendServiceEmail } = require("../../helpers/mail.helper");
const AppError = require("../../utils/app.error");
const ERRORS = require("../../utils/errorCodes");
const { RPF_STATUS_CONSTANTS, CACHE_KEYS } = require("../../utils/public.constants");
const { deleteByPattern } = require("../../utils/redis");

const sendRpfDataHandler = async (request) => {

  const { id, vendorId } = request.body;

  const [checkRpf, vendorList] = await Promise.all([
    db.Rpf.findOne({
      where: { id },
      attributes: ["id", "aiResponse", 'status'],
    }),
    db.Vendor.findAll({
      where: { id: vendorId },
      attributes: ["vendorEmail"],
    }),
  ]);

  if (!checkRpf) throw new AppError(ERRORS.RPF_NOT_EXIST);
  if (!vendorList.length) throw new AppError(ERRORS.VENDOR_NOT_EXIST);

  const rpf = typeof checkRpf.aiResponse === "string"
    ? JSON.parse(checkRpf.aiResponse)
    : checkRpf.aiResponse;

  const dataToSend = {
    rpfId: checkRpf.id,
    budget: rpf.budget || "Not provided",
    platformMentioned: rpf.platformMentioned || "Not mentioned",
    deliveryRequirements: rpf.deliveryRequirements || "Not specified",
    requirement: rpf.requirement || "No requirement provided"
  };

  checkRpf.status = RPF_STATUS_CONSTANTS.SENT_TO_VENDER

  await Promise.all([
    checkRpf.save(),
    deleteByPattern(`${CACHE_KEYS.RPF}_*`),
    ...vendorList.map((vendor) => {
      sendServiceEmail(vendor.vendorEmail, dataToSend)
    }
    )]
  );
  return { success: true };
};

module.exports = sendRpfDataHandler;
