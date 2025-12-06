const { z } = require("zod");

const getProposalSchema = z.object({
  query: z.object({
    id: z.coerce.number().int(),
    pageNo: z.string().regex(/^\d+$/).optional(),
    limit: z.string().regex(/^\d+$/).optional(),
  }).strict(),

  params: z.object({}).strict(),
});

module.exports = getProposalSchema;
