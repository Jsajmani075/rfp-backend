
const { default: z } = require("zod");

const getAiRecommendationSchema = z.object({
  body: z.object({
    id: z.coerce.number().int(),
    pageNo: z.string().regex(/^\d+$/).optional(),
    limit: z.string().regex(/^\d+$/).optional(),
  }).strict(),
  query: z.object({}).strict(),
  params: z.object({}).strict(),
})
module.exports = getAiRecommendationSchema