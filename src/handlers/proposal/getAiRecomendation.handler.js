const db = require("../../../models");
const axios = require("axios");
const AppError = require("../../utils/app.error");
const ERRORS = require("../../utils/errorCodes");
const { PROPOSAL_STATUS_CONSTANTS, CACHE_KEYS } = require("../../utils/public.constants");
const { deleteByPattern } = require("../../utils/redis");
require("dotenv").config();

const getairecomendationHandler = async (request) => {
  const { body, query, proposal } = request
  const { id } = body

  const proposals = await db.Proposal.findAll({
    where: { rpfId: id },
    attributes: ["id", "vendorId", "emailBodyContent"]
  });

  if (!proposals.length) throw new AppError(ERRORS.PROPOSAL_NOT_FOUND);

  const proposalData = proposals.map(p => ({
    vendorId: p.vendorId,
    content: p.emailBodyContent
  }));

  const prompt = `
You are an expert evaluator. You will receive multiple vendor proposals for the same RPF (Request for Proposal).
These proposals may relate to ANY domain: software, hardware, services, consulting, food items, supplies, labor, equipment, agriculture, etc.

Your job is to evaluate each proposal objectively based on universal criteria.

Return a STRICT JSON ARRAY. DO NOT RETURN ANYTHING EXCEPT JSON.

Each object must follow this EXACT shape:

{
  "vendorId": <number>,
  "comment": "<short analysis of the proposal>",
  "score": <number between 1–10>,
  "rank": <number where 1 = best>
}

GENERAL evaluation criteria (use these universally):
- Clarity and completeness of the proposal
- Quality and relevance of the solution being offered (general suitability)
- Price fairness / cost justification
- Feasibility of proposed timeline or delivery expectations
- Professionalism and communication quality
- Any risks, red flags, or missing information

Instructions:
1. Read ALL vendor proposals carefully.
2. Evaluate each separately based on general universal criteria above.
3. Assign a score from 1–10 (higher = better).
4. Rank the proposals from best to worst (1 = best).
5. Output ONLY a JSON ARRAY, nothing else.

Input proposals:
${JSON.stringify(proposalData, null, 2)}
`;

  const payload = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ]
  };

  const url = `${process.env.GEMINI_BASE_URL}?key=${process.env.GEMINI_API_KEY}`;

  try {
    const response = await axios.post(url, payload, {
      headers: { "Content-Type": "application/json" }
    });

    let text = response.data.candidates[0].content.parts[0].text;
    text = text
      .replace(/```json|```/g, "")
      .replace(/[\u0000-\u001F]+/g, "")
      .trim();


    let aiOutput;

    try {
      aiOutput = JSON.parse(text);
    } catch (err) {
      console.error("<<<<<JSon parsed faile>>>>>>>>>>:", text);
      throw new Error("AI returned invalid JSON");
    }
    await Promise.all([
      deleteByPattern(`${CACHE_KEYS.PROPOSAL}_*`),
      ...aiOutput.map(item =>
        db.Proposal.update(
          {
            aiResponse: item.comment,
            aiRank: item.rank,
            status: PROPOSAL_STATUS_CONSTANTS.AI_RECOMMENDATION
          },
          { where: { vendorId: item.vendorId } }
        )
      )
    ]);


    return {
      success: true,
    };

  } catch (err) {
    console.error("<<<<<<<<<<<<<Gemini error>>>>>>>>>>>>", err.response?.data || err.message);
    throw new Error("Gemini API failed");
  }
};

module.exports = getairecomendationHandler;
