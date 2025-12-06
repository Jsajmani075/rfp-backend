const SibApiV3Sdk = require("sib-api-v3-sdk");
require("dotenv").config();

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

const sendServiceEmail = async (toEmail, data) => {
  const {
    budget,
    platformMentioned,
    deliveryRequirements,
    requirement,
    rpfId
  } = data;

  const htmlContent = `
    <div style="font-family: Arial; padding: 20px; color: #333;">
      <h2 style="color:#1E88E5;">RPF #${rpfId} – Requirement Details</h2>

      <p>Hello,</p>
      <p>Please find below the requirement details shared by the user. Kindly review them and share your proposal for this RPF.make sure to add rpf id in subject without this we can't recommend you</p>

      <table style="border-collapse: collapse; width: 100%; margin-top: 15px;">
        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Requirement</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">${requirement}</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Budget</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">${budget}</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Platform Mentioned</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">${platformMentioned}</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:10px;"><strong>Delivery Requirements</strong></td>
          <td style="border:1px solid #ccc; padding:10px;">${deliveryRequirements}</td>
        </tr>
      </table>

      <p style="margin-top:20px;">We look forward to receiving your proposal for this RPF.</p>

      <p>Regards,<br/>Jagjot Singh</p>
    </div>
  `;

  const emailData = {
    sender: { name: "Jagjot", email: process.env.EMAIL_ID },
    to: [{ email: toEmail }],
    subject: `RPF #${rpfId}`,
    htmlContent,
  };

  return await emailApi.sendTransacEmail(emailData);
};

module.exports = { sendServiceEmail };
