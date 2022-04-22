import { prop, modelOptions, getModelForClass} from '@typegoose/typegoose';

@modelOptions({schemaOptions: {timestamps: true}})
class User{
  @prop()
  public name?: string;

  @prop({trim:true})

  public email?: string;

  @prop({trim:true })
  public password?: string;

  @prop({default:0})
  public role?: number;
}

const UserModel = getModelForClass(User);

export {UserModel,User}
