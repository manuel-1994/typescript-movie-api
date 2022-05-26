import BaseRouter  from '../config/base.router';
import { UserController } from '../controllers';
import {CreateUserSchema,UpdateUserSchema} from '../schemas/user.schema';
import schemaValidation from '../middlewares/schemaValidator';

export default class UserRouter extends BaseRouter<UserController>{
  constructor(){
    super(UserController);
  }
  
  public routes(): void {
    this.router.get('/users', this.controller.getUsers);
    this.router.get('/user/:email', this.controller.getByEmail);
    this.router.post('/createUser', schemaValidation(CreateUserSchema),this.controller.createUser);
    this.router.put('/updateUser/:id', schemaValidation(UpdateUserSchema), this.controller.updateUser);
    this.router.delete('/deleteUser', this.controller.deleteUser)
  }
}
