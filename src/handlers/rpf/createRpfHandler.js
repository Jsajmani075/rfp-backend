const db = require("../../../models");
const axios = require("axios");
require("dotenv").config();

const createRpfHandler = async (request) => {
  const { title, userText } = request.body;

  const prompt = `
You are an RFP (Request For Proposal) structuring assistant.

Your job is to convert ANY user request (laptop purchase, hardware repair, software development, services, digital marketing, IT setup, or anything else) into a STRICT JSON format with EXACTLY the following 4 fields:

{
  "requirement": "",
  "budget": "",
  "platformMentioned": "",
  "deliveryRequirements": ""
}

Rules:
1. "requirement": Summarize the user's main need in 1–3 lines.
2. "budget": If the user mentions a price, return it with currency. If not provided, return "Not provided".
3. "platformMentioned": If the user mentions any platform (Flipkart, Amazon, website, vendor name, app name, etc.), include it. Otherwise return "Not mentioned".
4. "deliveryRequirements": Include urgency, timeline, expected days, deadline, or delivery expectation. If not provided, return "Not specified".

Important:
- Output ONLY the JSON object.
- Do NOT include any explanation, extra text, or notes before or after the JSON.

User Input:
${userText}
`;

  const payload = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ]
  };

  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

  try {
    const response = await axios.post(url, payload, {
      headers: { "Content-Type": "application/json" }
    });

    let text = response.data.candidates[0].content.parts[0].text;

    text = text
      .replace(/```json|```js|```/g, "")
      .replace(/[\u0000-\u001F]+/g, "")
      .trim();

    let aiResponse;

    try {
      aiResponse = JSON.parse(text);
    } catch (err) {
      console.error("JSON PARSE FAILED — RAW TEXT:", text);
      throw new Error("AI returned invalid JSON");
    }

    console.log("Parsed AI Response:", aiResponse);

    await db.Rpf.create({
      title,
      userText,
      aiResponse,
      budgetTotal:
        typeof aiResponse.budget === "string"
          ? aiResponse.budget
          : aiResponse.budget?.max || null
    });

    return {
      success: true,
      message: "Your RPF is created successfully"
    };
  } catch (err) {
    console.error("GEMINI CALL ERROR:", err.response?.data || err.message);
    throw new Error("Gemini API failed");
  }
};

module.exports = createRpfHandler;
