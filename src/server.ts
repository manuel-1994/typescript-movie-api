import express, { Application, Request, Response } from "express"

class Server {
  private app:Application;
  
  constructor(private port: string | undefined){
    this.port = port;
    this.app = express();
    this.middlewares();
    this.routes();
  }

  public static init(port:string | undefined):Server{
    return new this(port);
  }

  private middlewares(){
    this.app.use(express.json());
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