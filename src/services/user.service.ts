import {UserModel,User} from '../models/users.model';
import {IResponse, IService} from '../interfaces'

class UserService implements IService<User> {

  async create(model: User): Promise<IResponse<User>> {
    const isValid = await this.validateEmail(<string>model.email);

    if(isValid.success){
      const saveData =  await UserModel.create(model);
      return {success:true,message:`Success created user`, data:saveData}
    }
    
    return isValid;
  }

  async getAll(): Promise<IResponse<User[]>> {
    const users = await UserModel.find();
    if(users.length > 0){
      return {success:true, data: users}
    }
    return {success:false, message:"Users don't exist"}
  }

  async get(query:User): Promise<IResponse<User>> {
    const user = await UserModel.findOne(query);
    
    if(user) return {success:true, data:user};

    return {success:false, message:"User not found"}
  }

  async update(id: string, model: User): Promise<IResponse<User>> {
    const dataUpdated = await UserModel.findByIdAndUpdate(id,model, {new:true});
    if(dataUpdated){
      return {success:true, message:`Success updated user`, data: dataUpdated}
    }
    return {success:false, message:`Update error; user not found`}
  }

  async delete(id: string): Promise<IResponse<User>> {
    const dataDeleted = await UserModel.findByIdAndDelete(id);
    if(dataDeleted){
      return {success:true, message:`Success deleted user`, data:dataDeleted}
    }
    return {success:false, message:`Delete error; user not found`}
  }

  private async validateEmail(email:string){
    const isValid = await this.get({email});
    
    if(isValid.success) return {success: false, message:"El email ya existe"};
    
    return {success: true, message:"El email es valido"};
  }
}

export default UserService;