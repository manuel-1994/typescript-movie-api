import GenericCRUD from './genericCRUD';
import {UserModel,User} from '../models/users';
import { Info } from '../interfaces/info.interface';

class UserService extends GenericCRUD<User> {
  constructor(){
    super(UserModel, "User");
  }

  async getByEmail(email:string):Promise<Info<User>>{
    const user = await UserModel.findOne({email});
    
    if(user) return {success:true, data:user};

    return {success:false, message:"User not found"};
  }

  async create(data:User):Promise<Info<User>>{
    const isValid = await this.validateEmail(<string>data.email);
  
    if(isValid.success) return await super.create(data);
    
    return isValid;
  }
  
  private async validateEmail(email:string):Promise<Info<User>>{
    const isValid = await this.getByEmail(email);
    
    if(isValid.success) return {success: false, message:"El email ya existe"};
    
    return {success: true, message:"El email es valido"};
  }
}

export default UserService;