import {getModelForClass, prop, modelOptions} from '@typegoose/typegoose'
import {IsEmail, IsString, MinLength, registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';


@modelOptions({schemaOptions: {timestamps: true}})
class User{
  @prop()
  @IsString()
  @MinLength(10)
  public name: string;

  @prop({trim:true})
  @IsString()
  @IsEmail()
  public email: string;

  @prop({trim:true })
  @IsString()
  public password: string;

  @prop({default:0})
  public role: number;
}

const UserModel = getModelForClass(User)


export {User, UserModel}
