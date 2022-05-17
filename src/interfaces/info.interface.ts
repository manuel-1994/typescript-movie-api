export interface Info<T>{
  success: boolean,
  message?: string | string[],
  data?: T
}