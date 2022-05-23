import { Request, Response } from "express";
import { MovieService } from "../services";

export default class MovieController{
  constructor(private readonly movieService: MovieService = new MovieService()){
    this.getMovies = this.getMovies.bind(this);
    this.getMovie = this.getMovie.bind(this);
    this.createMovie = this.createMovie.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  async getMovies(req:Request, res:Response){
    try {
      const response = await this.movieService.getAll();
      return res.status(response.success?200:400).json(response)
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error"})
    }
  }

  async getMovie(req:Request, res:Response){
    try {
      const response = await this.movieService.get(req.body);
      return res.status(response.success?200:400).json(response)
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error"})
    }
  }

  async createMovie(req:Request, res:Response){
    try {
      const response = await this.movieService.create(req.body);
      return res.status(response.success?201:400).json(response)
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"internal server error"})
    }
  }

  async updateMovie(req:Request,res:Response){
    try {
      const response = await this.movieService.update(req.params.id, req.body);
      return res.status(response.success?200:400).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error"})
    }
  }

  async deleteMovie(req:Request, res:Response){
    try {
      const response = await this.movieService.delete(req.params.id);
      res.status(response.success?200:400).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error"})
    }
  }
}