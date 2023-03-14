import { IResponse, IService } from "../interfaces";
import { Movie, MovieModel } from "../models/movie.model";
import { Review } from "../models/reviews.model";
import ReviewService from './review.service';

export default class MovieService implements IService<Movie>{
  constructor(private readonly reviewService = new ReviewService()){}
  public async create(model: Movie): Promise<IResponse<Movie>> {
    const movie = await MovieModel.create(model);
    return {success: true, data: movie}
  }

  public async getAll(): Promise<IResponse<Movie[]>> {
    const movies = await MovieModel.find();
    if(movies.length>0)return {success: true, data: movies}
    return {success: false, error:"Movies don't exist"}
  }

  public async get(query: Movie): Promise<IResponse<Movie>> {
    const movie = await MovieModel.findOne(query);
    if(movie) return {success:true, data:movie}
    return {success: false, error: "Movie not found"}
  }

  public async update(id: string, model: Movie): Promise<IResponse<Movie>> {
    const movieUpdated = await MovieModel.findByIdAndUpdate(id, model, {new:true})
    if(movieUpdated)return{success:true, data:movieUpdated}
    return {success:false, error:"Update error; movie not found"}
  }

  public async delete(id: string): Promise<IResponse<Movie>> {
    const movieDeleted = await MovieModel.findByIdAndDelete(id)
    if(movieDeleted)return{success:true, data:movieDeleted}
    return {success:false, error:"Delete error; movie not found"}
  }

  public async addReview(movieId:string, model:Review): Promise<IResponse<Review>>{
    const movie = await MovieModel.findById(movieId);
    if(movie){
      const review = await this.reviewService.create(model)
      await movie.updateOne({$push:{reviews:{_id: review.data?._id}}})
      return review
    }
    return {success: false, error: "Movie not found"}
  }
}