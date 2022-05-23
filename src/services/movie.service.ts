import { IResponse, IService } from "../interfaces";
import { Movie, MovieModel } from "../models/movie.model";

export default class MovieService implements IService<Movie>{
  async create(model: Movie): Promise<IResponse<Movie>> {
    const movie = await MovieModel.create(model);
    return {success: true, message:"Success created movie", data: movie}
  }

  async getAll(): Promise<IResponse<Movie[]>> {
    const movies = await MovieModel.find();
    if(movies.length>0)return {success: true, data: movies}
    return {success: false, message:"Movies don't exist"}
  }

  async get(query: Movie): Promise<IResponse<Movie>> {
    const movie = await MovieModel.findOne(query);
    if(movie) return {success:true, data:movie}
    return {success: false, message: "Movie not found"}
  }

  async update(id: string, model: Movie): Promise<IResponse<Movie>> {
    const movieUpdated = await MovieModel.findByIdAndUpdate(id, model, {new:true})
    if(movieUpdated)return{success:true, message: "Success updated movie", data:movieUpdated}
    return {success:false, message:"Update error; movie not found"}
  }

  async delete(id: string): Promise<IResponse<Movie>> {
    const movieDeleted = await MovieModel.findByIdAndDelete(id)
    if(movieDeleted)return{success:true, message: "Success deleted movie", data:movieDeleted}
    return {success:false, message:"Delete error; movie not found"}
  }
}