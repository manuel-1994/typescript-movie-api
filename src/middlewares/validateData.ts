import { Request,Response, NextFunction } from 'express';
import { validate} from 'class-validator';
import {ClassConstructor, plainToClass} from 'class-transformer'
import { User } from '../models/users';
import filterErrors from '../helpers/filterErrors';

async function validateData(cls:ClassConstructor<Object>, req:Request,res:Response,next:NextFunction){
  const data = plainToClass(cls, req.body)
  const errors = await validate(data)
  if(errors.length>0){ 
    const message = filterErrors(errors)
    return res.status(400).json({success:false, message})
  }
  return next();
}

const validateUser = (req:Request,res:Response,next:NextFunction) => validateData(User, req,res,next)

export {
  validateUser
}