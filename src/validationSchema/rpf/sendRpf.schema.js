const { default: z } = require("zod")

const sendrpfSchema = z.object({
  body: z.object({
    id: z.union([z.number().int(),
    z.string().regex(/^\d+$/, "id must be numeric")]),
    vendorId: z.array(z.union([
      z.number().int(),
      z.string().regex(/^\d+$/, "userId must be numeric")
    ]))
  }).strict(),
  query: z.object({}).strict(),
  params: z.object({}).strict()
})
module.exports = sendrpfSchema