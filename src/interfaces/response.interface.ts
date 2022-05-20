export default interface IResponse<T>{
  success: boolean,
  message?: string | string[],
  data?: T | T[]
}