import GenericCRUD from './genericCRUD';
import {User} from '../models/users';

class Users extends GenericCRUD<User> {
  constructor(){
    super(User, "User")
  }
  
}

export default Users;