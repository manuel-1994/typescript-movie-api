import { Request, Response } from "express";
import { MovieService } from "../services";
import BaseController from '../config/base.controller';

export default class MovieController extends BaseController<MovieService>{
  constructor(){
    super(MovieService);
    this.getMovies = this.getMovies.bind(this);
    this.getMovie = this.getMovie.bind(this);
    this.createMovie = this.createMovie.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  public async getMovies(req:Request, res:Response){
    try {
      const response = await this.service.getAll();
      if(response.success) return this.httpResponse.Ok(res, response.data);
      return this.httpResponse.NotFound(res, response.error as string); 
    } catch (error) {
      return this.httpResponse.Error(res,error);
    }
  }

  public async getMovie(req:Request, res:Response){
    try {
      const response = await this.service.get(req.body);
      if(response.success) return this.httpResponse.Ok(res, response.data);
      return this.httpResponse.NotFound(res, response.error as string); 
    } catch (error) {
      return this.httpResponse.Error(res,error);
    }
  }

  public async createMovie(req:Request, res:Response){
    try {
      const response = await this.service.create(req.body);
      if(response.success) return this.httpResponse.Created(res, response.data);
      return this.httpResponse.BadRequest(res, response.error as string); 
    } catch (error) {
      return this.httpResponse.Error(res,error)
    }
  }

  public async updateMovie(req:Request,res:Response){
    try {
      const response = await this.service.update(req.params.id, req.body);
      if(response.success) return this.httpResponse.Ok(res, response.data);
      return this.httpResponse.NotFound(res, response.error as string); 
    } catch (error) {
      return this.httpResponse.Error(res,error);
    }
  }

  public async deleteMovie(req:Request, res:Response){
    try {
      const response = await this.service.delete(req.params.id);
      if(response.success) return this.httpResponse.Ok(res, response.data);
      return this.httpResponse.NotFound(res, response.error as string); 
    } catch (error) {
      return this.httpResponse.Error(res,error);
    }
  }
}