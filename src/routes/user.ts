import {Request, Response, Router} from 'express'
import Users from '../services/user';
import { Info } from '../interfaces/info.interface';
import { validateUser } from '../middlewares/validateData';

const usersService = new Users();
const router = Router()

router.get('/', async (req:Request,res:Response):Promise<Response>=>{
  const response:Info= await usersService.getAll()
  return res.status(200).json(response)
})

router.post('/', validateUser, async(req:Request,res:Response):Promise<Response>=>{
  const data= req.body
  const response:Info= await usersService.create(data)
  return res.status(201).json(response)
})

router.put('/', validateUser, async(req:Request, res:Response):Promise<Response>=>{
  const response:Info = await usersService.update(req.body.id, req.body)
  return res.status(response.success?200:400).json(response)
})

router.delete('/', async(req:Request, res:Response):Promise<Response>=>{
  const response:Info = await usersService.delete(req.body.id)
  return res.status(response.success?200:400).json(response)
})


export default router