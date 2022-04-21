import { Request,Response, NextFunction } from 'express';
import {AnyZodObject} from 'zod'
import { CreateUserSchema } from '../schemas/user';

async function validateData(schema:AnyZodObject, req:Request,res:Response,next:NextFunction){
  const data = schema.safeParse(req.body)
  if(data.success){
    return next();
  }
  return res.status(400).json(data)
}

const validateUser = (req:Request,res:Response,next:NextFunction) => validateData(CreateUserSchema, req,res,next)

export {
  validateUser
}