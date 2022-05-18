import dotenv from 'dotenv';
import mongoose from 'mongoose';
export default abstract class ConfigServer{
  constructor(){
    const nodeNameEnv = this.createEnviroment(this.nodeEnviroment);
    dotenv.config({
      path: nodeNameEnv
    })
  }

  private get nodeEnviroment(): string{
    return this.getEnviroment("NODE_ENV")?.trim() || "";
  }

  private createEnviroment(path:string): string{
    const arrayEnviroment: string[] = ["env"]

    if(path.length > 0){
      const stringToArray = path.split('.');
      arrayEnviroment.push(...stringToArray)
    }
    return '.' + arrayEnviroment.join('.')
  }

  public getEnviroment(key:string): string | undefined{
    return process.env[key];
  }

  public getNumberEnviroment(key:string): number{
    return Number(this.getEnviroment(key));
  }

  public mongooseConfig():Promise<typeof mongoose> {
    return mongoose.connect(<string>this.getEnviroment('DB_URI'))
  }
}