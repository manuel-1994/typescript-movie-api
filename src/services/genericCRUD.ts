import { Info } from '../interfaces/info.interface';
import { ReturnModelType} from '@typegoose/typegoose';
import { BeAnObject, AnyParamConstructor } from '@typegoose/typegoose/lib/types';

abstract class GenericCRUD<T, U extends AnyParamConstructor<T> = AnyParamConstructor<T> >{
  private dataModel:ReturnModelType<U, BeAnObject>;

  constructor(dataModel:ReturnModelType<U, BeAnObject>, private nameOfService:String){
    this.dataModel = dataModel;
  }

  async create(data:T):Promise<Info>{
      const saveData =  await this.dataModel.create(data);
      return {success:true,message:`Success created ${this.nameOfService}`, data:saveData}
  }

  async getAll():Promise<Info>{
    const users: T[] | undefined = await this.dataModel.find();
    return {success:true, data: users}
  }

  async update(id:String,data:T):Promise<Info>{
    const dataUpdated = await this.dataModel.findByIdAndUpdate(id,data, {new:true});
    if(dataUpdated){
      return {success:true, message:`Success updated ${this.nameOfService}`, data: dataUpdated}
    }
    return {success:false, message:`Update error; ${this.nameOfService} not found`}
  }

  async delete(id:String):Promise<Info>{
    const dataDeleted = await this.dataModel.findByIdAndDelete(id);
    if(dataDeleted){
      return {success:true, message:`Success deleted ${this.nameOfService}`, data:dataDeleted}
    }
    return {success:false, message:`Delete error; ${this.nameOfService} not found`}
  }
}

export default GenericCRUD