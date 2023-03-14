import { prop, modelOptions, getModelForClass, Ref} from '@typegoose/typegoose';
import { User } from './users.model';
import BaseModel from '../config/base.model';

class Review extends BaseModel{
  @prop({ref: ()=> User})
  public author?: Ref<User>;

  @prop({min:0, max:5})
  public stars?: number;

  @prop({trim:true})
  public comment?: string;
}

const ReviewModel = getModelForClass(Review);

export {ReviewModel,Review}