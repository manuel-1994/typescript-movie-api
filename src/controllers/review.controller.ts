import { Request, Response } from 'express';
import BaseController from '../config/base.controller';
import ReviewService from '../services/review.service';

export default class ReviewController extends BaseController<ReviewService>{
  constructor(){
    super(ReviewService)
    this.getReviews = this.getReviews.bind(this);
    this.getReview = this.getReview.bind(this);
    this.createReview = this.createReview.bind(this);
    this.updateReview = this.updateReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
  }

  public async getReviews(req:Request, res: Response){
    try {
      const response = await this.service.getAll();
      if(response.success) return this.httpResponse.Ok(res, response.data);
      return this.httpResponse.NotFound(res, response.error as string);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  public async getReview(req:Request, res: Response){
    try {
      const response = await this.service.get(req.body);
      if(response.success) return this.httpResponse.Ok(res, response.data);
      return this.httpResponse.NotFound(res, response.error as string);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  public async createReview(req:Request, res: Response){
    try {
      const response = await this.service.create(req.body);
      if(response.success) return this.httpResponse.Created(res, response.data);
      return this.httpResponse.BadRequest(res, response.error as string);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  public async updateReview(req:Request, res: Response){
    try {
      const response = await this.service.update(req.params.id,req.body);
      if(response.success) return this.httpResponse.Ok(res, response.data);
      return this.httpResponse.NotFound(res, response.error as string);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  public async deleteReview(req:Request, res: Response){
    try {
      const response = await this.service.delete(req.params.id);
      if(response.success) return this.httpResponse.Ok(res, response.data);
      return this.httpResponse.NotFound(res, response.error as string);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
}