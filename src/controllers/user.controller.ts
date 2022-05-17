import { Request, Response } from "express";
import { CreateUserType, UpdateUserBodyType, UpdateUserParamsType } from "../schemas/user.schema";
import { UserService } from "../services";


export default class UserController{
  constructor(private readonly userService:UserService = new UserService()){
    this.getUsers = this.getUsers.bind(this)
    this.getByEmail = this.getByEmail.bind(this)
    this.createUser = this.createUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }

  async getUsers (req:Request,res:Response){
    try {
      const response= await this.userService.getAll();
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error"})
    }
  }

  async getByEmail(req:Request,res:Response){
    try {
      const response = await this.userService.getByEmail(req.body);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error"})
    }
  }

  async createUser(req:Request<unknown,unknown,CreateUserType>, res:Response){
    try {
      const response= await this.userService.create(req.body);
      return res.status(201).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error"})
    }
  }

  async updateUser(req:Request<UpdateUserParamsType, unknown, UpdateUserBodyType>,res:Response){
    try {
      const response = await this.userService.update(req.params.id, req.body);
      return res.status(response.success?200:400).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error"})
    }
  }

  async deleteUser(req:Request, res:Response){
    try {
      const response = await this.userService.delete(req.body.id);
      res.status(response.success?200:400).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error"})
    }
  }
}