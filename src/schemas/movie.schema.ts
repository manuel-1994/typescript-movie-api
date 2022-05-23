import {z, ZodObject} from 'zod'
import { Movie } from '../models/movie.model'

const CreateMovieSchema= z.object({
  body: z.object({
    title: z.string().nonempty(),
    image: z.string().nonempty(),
    overview: z.string().nonempty(),
    releaseDate: z.string().nonempty(),
  })
})

const UpdateMovieSchema = z.object({
  body: z.object({
    title: z.string().nonempty().optional(),
    image: z.string().nonempty().optional(),
    overview: z.string().nonempty().optional(),
    releaseDate: z.string().nonempty().optional(),
  })
})

export {
  CreateMovieSchema,
  UpdateMovieSchema
}