import express, { Application } from "express";
import routers from "./routes";
import database from "./config/database/mongo";
import ConfigServer from './config/config';

export class Server extends ConfigServer {
  private app: Application = express(); 
  private port: number = this.getNumberEnviroment("PORT");
  private db_uri: string|undefined = this.getEnviroment("DB_URI");

  private constructor() {
    super();
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
  }

  private async dbConnection(): Promise<void> {
    try {
      const connect = await database(this.db_uri);
      console.log('Mongo db connected', connect.connection.host);
    } catch (error) {
      console.log(error);
    }
  }

  private routes() {
    this.app.use('/api', routers());
  }

  public static init(): Server {
    return new this();
  }
  
  public async listen() {
    await this.app.listen(this.port);
    console.log(`Application running on: http://localhost:${this.port}`);
  }
}
