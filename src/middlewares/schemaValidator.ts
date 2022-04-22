import { Request,Response, NextFunction } from 'express';
import {AnyZodObject, ZodError} from 'zod'

const schemaValidation = (schema: AnyZodObject) => (req:Request,res:Response,next:NextFunction) =>{
  try {
    schema.parse({
      body: req.body,
      params: req.params,
      query: req.query
    });
    next();
  } catch (error) {
    if(error instanceof ZodError){
      return res.status(400).json({
        success:false, 
        errors:error.issues.map((issues)=>({path: issues.path[1], message: issues.message}))
      });
    }
    return res.status(500).json({message: "Internal server error"});
  }
}

export default schemaValidation;

