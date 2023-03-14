import { prop, modelOptions} from '@typegoose/typegoose';
import mongoose from 'mongoose';

@modelOptions({schemaOptions: {timestamps: true}})
export default class BaseModel{
  @prop()
  public _id: mongoose.Types.ObjectId
}
