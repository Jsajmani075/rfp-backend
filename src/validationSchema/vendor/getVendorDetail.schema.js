const { z } = require("zod");

const getVendorDetailSchema = z.object({
  query: z.object({}).strict(),
  params: z.object({
    id: z.union([
      z.number().int(),
      z.string().regex(/^\d+$/, "id must be numeric")
    ])
  }).strict(),
});

module.exports = getVendorDetailSchema;
