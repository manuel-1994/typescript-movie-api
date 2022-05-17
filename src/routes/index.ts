import UserRouter from './user.routes'
import express from 'express';

const routers = ():Array<express.Router>=>{
  return [new UserRouter().router]
}

export default routers