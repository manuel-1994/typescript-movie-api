import HttpResponse from '../helpers/httpResponse';

export default abstract class BaseController<T>{
  protected readonly httpResponse: HttpResponse
  protected readonly service: T
  constructor(TService: {new ():T}){
    this.httpResponse = new HttpResponse();
    this.service = new TService();
  }
}