import { IResponse, IService } from "../interfaces";
import { Review, ReviewModel } from "../models/reviews.model";

export default class ReviewService implements IService<Review>{

  async create(model: Review): Promise<IResponse<Review>> {
    const saveReview = await ReviewModel.create(model);
    return {success: true, data: saveReview}
  }

  async getAll(): Promise<IResponse<Review[]>> {
    const reviews = await ReviewModel.find();
    if(reviews.length>0) return {success:true, data: reviews }
    return {success: false, error: "Reviews don't exist" }
  }

  async get(query: Review): Promise<IResponse<Review>> {
    const review = await ReviewModel.findOne(query)
    if(review) return {success: true, data: review}
    return {success: false, error: "Review not found"}
  }

  async update(id: string, model: Review): Promise<IResponse<Review>> {
    const reviewUpdated = await ReviewModel.findByIdAndUpdate(id, model);
    if(reviewUpdated) return {success: true, data: reviewUpdated}
    return {success: false, error: "Update error; Review not found"}
  }

  async delete(id: string): Promise<IResponse<Review>> {
    const reviewDeleted = await ReviewModel.findByIdAndDelete(id);
    if(reviewDeleted) return {success: true, data: reviewDeleted}
    return {success: false, error: "Delete error; Review not found"}
  }
}