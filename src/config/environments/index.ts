import dotenv from 'dotenv';
dotenv.config();
import development from "./development";
import production from './production';
import test from "./test";

let currentConfig:{
  port: string | undefined,
  DB:{
    host: string,
    database: string
  }
};


switch (process.env.NODE_ENV) {
  case "test":
    currentConfig = test;
    break;
  case "production":
    currentConfig = production;
    break;
  default:
    currentConfig = development;
    break;
}
currentConfig
export default currentConfig;