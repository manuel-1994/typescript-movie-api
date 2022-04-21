import {z} from 'zod'

const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  repeatPassword: z.string()
})

export default CreateUserSchema