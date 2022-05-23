import express from 'express';
import UserRouter from './user.routes';
import MovieRouter from './movie.routes';

const routers = ():Array<express.Router>=>{
  return [
    new UserRouter().router,
    new MovieRouter().router
  ]
}

export default routers