import express from 'express';
import UserRouter from './user.routes';
import MovieRouter from './movie.routes';
import ReviewRouter from './review.routes';

const routers = ():Array<express.Router>=>{
  return [
    new UserRouter().router,
    new MovieRouter().router,
    new ReviewRouter().router
  ]
}

export default routers