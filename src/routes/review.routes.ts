import BaseRouter from '../config/base.router';
import { ReviewController } from '../controllers';
import schemaValidation from '../middlewares/schemaValidator';
import { CreateReviewSchema, UpdateReviewSchema } from '../schemas/review.schema';

export default class ReviewRouter extends BaseRouter<ReviewController>{
  constructor(){
    super(ReviewController)
  }

  protected routes(): void {
    this.router.get('/reviews', this.controller.getReviews);
    this.router.get('/review', this.controller.getReview);
    this.router.post('/createReview',schemaValidation(CreateReviewSchema), this.controller.createReview);
    this.router.put('/updateReview/:id',schemaValidation(UpdateReviewSchema), this.controller.updateReview);
    this.router.delete('/deleteReview/:id', this.controller.deleteReview);
  }
}