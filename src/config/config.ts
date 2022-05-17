import dotenv from 'dotenv';
export default class ConfigServer{
  constructor(){
    const nodeNameEnv = this.createEnviroment(this.nodeEnviroment());
    dotenv.config({
      path: nodeNameEnv
    })
  }

  public getEnviroment(key:string): string | undefined{
    return process.env[key];
  }

  public getNumberEnviroment(key:string): number{
    return Number(this.getEnviroment(key));
  }

  public nodeEnviroment(): string{
    return this.getEnviroment("NODE_ENV")?.trim() || "";
  }

  public createEnviroment(path:string): string{
    const arrayEnviroment: string[] = ["env"]

    if(path.length > 0){
      const stringToArray = path.split('.');
      arrayEnviroment.push(...stringToArray)
    }

    return '.' + arrayEnviroment.join('.')
  }
}