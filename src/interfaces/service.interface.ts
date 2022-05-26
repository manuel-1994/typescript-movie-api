import  IResponse  from "./response.interface";

export default interface IService<T>{
  create(model:T):Promise<IResponse<T>>,
  get(query:T):Promise<IResponse<T>>,
  getAll():Promise<IResponse<T[]>>,
  update(id:string, model:T):Promise<IResponse<T>>,
  delete(id:string):Promise<IResponse<T>>
}