const db = require("../../../models");
const { sendServiceEmail } = require("../../helpers/mail.helper");
const AppError = require("../../utils/app.error");
const ERRORS = require("../../utils/errorCodes");

const sendRpfDataHandler = async (request) => {
  const { id, type } = request.query;

  const [checkRpf, vendorList] = await Promise.all([
    db.Rpf.findOne({
      where: { id, rpfType: type },
      attributes: ["id", "aiResponse", "rpfType"],
    }),
    db.Vendor.findAll({
      where: { type, isActive: true },
      attributes: ["vendorName", "vendorEmail"],
    }),
  ]);

  if (!checkRpf) throw new AppError(ERRORS.RPF_NOT_EXIST);
  if (!vendorList.length) throw new AppError(ERRORS.VENDOR_NOT_EXIST);
  const rpf = typeof checkRpf.aiResponse === "string"
    ? JSON.parse(checkRpf.aiResponse)
    : checkRpf.aiResponse;
  console.log(">>>>>>>>>>>line 22", rpf)

  const dataToSend = {
    rpfId: checkRpf.id,
    serviceType: type,
    budget: rpf.budget || "Not provided",
    platformMentioned: rpf.platformMentioned || "Not mentioned",
    deliveryRequirements: rpf.deliveryRequirements || "Not specified",
    requirement: rpf.requirement || "No requirement provided"
  };
  console.log(">>>>>>>>>>>line 22", dataToSend)

  // Send email to every vendor
  for (const vendor of vendorList) {
    await sendServiceEmail(vendor.vendorEmail, dataToSend);
  }

  return { success: true };
};

module.exports = sendRpfDataHandler;
