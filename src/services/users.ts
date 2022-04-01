import { Info } from 'interfaces/info.interface';
import { UserModel, User} from '../models/users';

class Users{
  async create(data:User):Promise<Info>{
      const saveData =  await UserModel.create(data)
      return {success:true,message:"Success created user", data:saveData}
  }

  async getAll():Promise<Info>{
    const users: User[] | undefined = await UserModel.find()
    return {success:true, data: users}
  }

  async update(id:string,data:User):Promise<Info>{
    const dataUpdated = await UserModel.findByIdAndUpdate(id,data, {new:true})
    if(dataUpdated){
      return {success:true, message:"Usuario actualizado exitosamente", data: dataUpdated}
    }
    return {success:false, message:"Error al actualizar; usuario no encontrado"}
  }

  async delete(id:string):Promise<Info>{
    const dataDeleted = await UserModel.findByIdAndDelete(id)
    if(dataDeleted){
      return {success:true, message:"Usuario eliminado exitosamente", data:dataDeleted}
    }
    return {success:false, message:"Error al eliminar; usuario no encontrado"}
  }
}

export default Users