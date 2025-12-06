const { default: z } = require("zod");

const noValidation = z.object({
  body: z.any(),
  query: z.any(),
  params: z.any(),
});
module.exports = noValidation