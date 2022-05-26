import { Request, Response } from "express";
import BaseController from "../config/base.controller";
import { CreateUserType, UpdateUserBodyType, UpdateUserParamsType } from "../schemas/user.schema";
import { UserService } from "../services";

export default class UserController extends BaseController<UserService>{
  constructor(){
    super(UserService)
    this.getUsers = this.getUsers.bind(this)
    this.getByEmail = this.getByEmail.bind(this)
    this.createUser = this.createUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }

  async getUsers (req:Request,res:Response){
    try {
      const response= await this.service.getAll();
      if(response.success) return this.httpResponse.Ok(res,response.data)
      return this.httpResponse.NotFound(res,response.error as string)
    } catch (error) {
      return this.httpResponse.Error(res,error)
    }
  }

  async getByEmail(req:Request,res:Response){
    try {
      const response = await this.service.get(req.body);
      if(response.success) return this.httpResponse.Ok(res,response.data)
      return this.httpResponse.NotFound(res, <string>response.error)
    } catch (error) {
      return this.httpResponse.Error(res,error)
    }
  }

  async createUser(req:Request<unknown,unknown,CreateUserType>, res:Response){
    try {
      const response= await this.service.create(req.body);
      if(response.success) return this.httpResponse.Created(res,response.data)
      return this.httpResponse.BadRequest(res, response.error as string)
    } catch (error) {
      return this.httpResponse.Error(res,error)
    }
  }

  async updateUser(req:Request<UpdateUserParamsType, unknown, UpdateUserBodyType>,res:Response){
    try {
      const response = await this.service.update(req.params.id, req.body);
      if(response.success) return this.httpResponse.Ok(res,response.data)
      return this.httpResponse.NotFound(res, response.error as string)
    } catch (error) {
      return this.httpResponse.Error(res,error)
    }
  }

  async deleteUser(req:Request, res:Response){
    try {
      const response = await this.service.delete(req.body.id);
      if(response.success) return this.httpResponse.Ok(res,response.data)
      return this.httpResponse.NotFound(res, response.error as string)
    } catch (error) {
      return this.httpResponse.Error(res,error)
    }
  }
}