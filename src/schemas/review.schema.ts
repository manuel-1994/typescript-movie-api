import {z} from 'zod'

const CreateReviewSchema = z.object({
  body: z.object({
    starts: z.number().min(0).max(5),
    comment: z.string().nonempty(),
  })
})

const UpdateReviewSchema = z.object({
  body: z.object({
    starts: z.number().min(0).max(5).optional(),
    comment: z.string().nonempty().optional(),
  }),
  params: z.object({
    id: z.string()
  })
})

export{
  CreateReviewSchema,
  UpdateReviewSchema
}
