import {Request, Response, Router} from 'express'
import { Info } from '../interfaces/info.interface';
import {CreateUserSchema, CreateUserType, UpdateUserBodyType, UpdateUserParamsType, UpdateUserSchema} from '../schemas/user.schema';
import schemaValidation from '../middlewares/schemaValidator';
import Users from '../services/user';

const user = (app:Router)=>{
  const usersService = new Users();
  const router = Router();
  app.use('/users', router)

  router.get('/', async (_,res:Response):Promise<Response>=>{
    const response:Info= await usersService.getAll();
    return res.status(200).json(response);
  })

  router.post('/', schemaValidation(CreateUserSchema), async(
      req:Request<unknown,unknown, CreateUserType>,
      res:Response
    ):Promise<Response> => {
      try {
        const response:Info= await usersService.create(req.body);
        return res.status(201).json(response);
      } catch (error) {
        return res.status(500).json({message:"Internal server error"})
      }
  })

  router.put('/:id', schemaValidation(UpdateUserSchema), async(
      req:Request<UpdateUserParamsType, unknown, UpdateUserBodyType>, 
      res:Response
    ):Promise<Response>=>{
    const response:Info = await usersService.update(req.params.id, req.body);
    return res.status(response.success?200:400).json(response);
  })

  router.delete('/', async(req:Request, res:Response):Promise<Response>=>{
    const response:Info = await usersService.delete(req.body.id);
    return res.status(response.success?200:400).json(response);
  })

  router.post('/user', async (req:Request,res:Response):Promise<Response>=>{
    const response:Info= await usersService.getByEmail(req.body);
    return res.status(200).json(response);
  })
}

export default user