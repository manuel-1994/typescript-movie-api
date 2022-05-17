import {z} from 'zod';

const SigninSchema = z.object({
  body: z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(6).nonempty()
  })
})

type SigninType = z.infer<typeof SigninSchema>["body"]

export{
  SigninSchema,
  SigninType
}