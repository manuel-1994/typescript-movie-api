import { User} from 'models/users';
import GenericCRUD from './genericCRUD';


class Auth{
  private userService:GenericCRUD<User,typeof User>
  constructor(){
    this.userService = new GenericCRUD<User>(User, "user")
  }
  async signin(email:string, password:string){
    
  }
}