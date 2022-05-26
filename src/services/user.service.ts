import {UserModel,User} from '../models/users.model';
import {IResponse, IService} from '../interfaces'

class UserService implements IService<User> {

  public async create(model: User):Promise<IResponse<User>>{
    const isValid = await this.validateEmail(model.email as string);
    if(isValid.success){
      const saveData =  await UserModel.create(model);
      return {success:true, data:saveData}
    } 
    return isValid;
  }

  public async getAll(): Promise<IResponse<User[]>> {
    const users = await UserModel.find();
    if(users.length > 0) return {success:true, data: users}
    return {success:false, error:"Users don't exist"}
  }

  public async get(query:User): Promise<IResponse<User>> {
    const user = await UserModel.findOne(query);
    if(user) return {success:true, data:user};
    return {success:false, error:"User not found"}
  }

  public async update(id: string, model: User): Promise<IResponse<User>> {
    const dataUpdated = await UserModel.findByIdAndUpdate(id,model, {new:true});
    if(dataUpdated){
      return {success:true, data: dataUpdated}
    }
    return {success:false, error:`Update error; user not found`}
  }

  public async delete(id: string): Promise<IResponse<User>> {
    const dataDeleted = await UserModel.findByIdAndDelete(id);
    if(dataDeleted){
      return {success:true, data:dataDeleted}
    }
    return {success:false, error:`Delete error; user not found`}
  }

  private async validateEmail(email:string){
    const isValid = await this.get({email});
    if(isValid.success) return {success: false, error:"El email ya existe"};
    return {success: true};
  }
}

export default UserService;