import express, { Application } from "express";
import routers from "./routes";
import ConfigServer from './config/config';

export class Server extends ConfigServer {
  private app: Application = express(); 
  private port: number = this.getNumberEnviroment("PORT");

  private constructor() {
    super();
    this.middlewares();
    this.dbConnection();
    this.routes();
  }

  public static init(): Server {
    return new this();
  }

  private middlewares() {
    this.app.use(express.json());
  }

  private async dbConnection(): Promise<void> {
    try {
      const connect = await this.mongooseConfig();
      console.log('Connected to connected:', connect.connection.name);
    } catch (error) {
      console.log(error);
    }
  }

  private routes() {
    this.app.use('/api', routers());
  }

  public async listen() {
    await this.app.listen(this.port);
    console.log(`Application running on: http://localhost:${this.port}`);
  }
}
