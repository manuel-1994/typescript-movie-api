import { prop, modelOptions, getModelForClass, Ref} from '@typegoose/typegoose';
import { Review } from './reviews.model';
import { User } from './users.model';

@modelOptions({schemaOptions: {timestamps: true}})
class Movie{
  @prop({trim:true})
  public title?: string;

  @prop({trim:true})
  public image?: string;

  @prop({trim:true})
  public overview?: string;

  @prop()
  public releaseDate?: Date;

  @prop({default:0 })
  public stars?: number;

  @prop({default:0})
  public numberOfVote?: number;

  @prop({ref: ()=> Review})
  public reviews?: Ref<Review>[];

  @prop({ref: ()=> User})
  public createBy?: Ref<User>
}

const MovieModel = getModelForClass(Movie);

export {MovieModel,Movie}