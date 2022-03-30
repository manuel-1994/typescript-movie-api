import express, { Application, Request, Response } from "express"
import { database } from "./config/database/mongo";

class Server {
  private app:Application;
  
  private constructor(private port: string | undefined, uri:string |undefined){
    this.app = express();

    this.dbConnection(uri);
    this.middlewares();
    this.routes();
  }

  public static init(port: string|undefined,uri:string|undefined):Server{
    return new this(port,uri);
  }

  private middlewares(){
    this.app.use(express.json());
  }

  private async dbConnection(uri:string|undefined):Promise<void>{
    try {
      const connect = await database(uri)
      console.log('Mongo db connected', connect.connection.host);
    } catch (error) {
      console.log(error);
    }
  }

  private routes(){
    this.app.get('/', (req:Request,res:Response):Response=>{
      return res.send('Hola mundo')
    })
  }

  public start(callback:()=>void){
    this.app.listen(this.port,callback);
  }
}

export default Server;