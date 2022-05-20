import { prop, modelOptions, getModelForClass} from '@typegoose/typegoose';

@modelOptions({schemaOptions: {timestamps: true}})
class User{
  @prop({trim:true})
  public name?: string;

  @prop({trim:true})
  public lastname?: string;

  @prop({trim:true})
  public username?: string;

  @prop({trim:true})
  public email?: string;

  @prop({trim:true })
  public password?: string;

  @prop({trim:true})
  public country?: string;

  @prop({default:0})
  public role?: number;
}

const UserModel = getModelForClass(User);

export {UserModel,User}
