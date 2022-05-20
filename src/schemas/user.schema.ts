import {z} from 'zod'

const CreateUserSchema = z.object({
  body: z.object({
    name: z.string().nonempty(),
    lastname: z.string().nonempty(),
    username: z.string().nonempty(),
    email: z.string().email().nonempty(),
    password: z.string().min(6).nonempty(),
    repeatPassword: z.string().min(6).nonempty(),
    country: z.string().nonempty()
  })
})

const UpdateUserSchema = z.object({
  body: z.object({
    name: z.string().nonempty().optional(),
    lastname: z.string().nonempty().optional(),
    username: z.string().nonempty().optional(),
    email: z.string().email().nonempty().optional(),
    password: z.string().nonempty().min(6).optional(),
    country: z.string().nonempty().optional(),
    role: z.number().nonnegative().max(2)
  }),
  params: z.object({
    id: z.string()
  })
})

type CreateUserType = z.infer<typeof CreateUserSchema>["body"]
type UpdateUserBodyType = z.infer<typeof UpdateUserSchema>["body"]
type UpdateUserParamsType = z.infer<typeof UpdateUserSchema>["params"]

export{
  CreateUserSchema,
  UpdateUserSchema,
  CreateUserType,
  UpdateUserBodyType,
  UpdateUserParamsType
}