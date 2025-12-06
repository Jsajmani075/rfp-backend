const { default: z } = require("zod")

const createrpfSchema = z.object({
  body: z.object({
    userText: z.string().min(2)
  }).strict(),
  query: z.object({}).strict(),
  params: z.object({}).strict()
})
module.exports = createrpfSchema