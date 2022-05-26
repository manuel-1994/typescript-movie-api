import { Router } from "express";

export default abstract class BaseRouter<T>{
  public readonly router: Router;
  protected readonly controller: T;
  constructor(TController: {new ():T}){
    this.router = Router();
    this.controller = new TController();
    this.routes();
  }

  public routes(){}
}
