import dotenv from 'dotenv';
import { Env } from '../../interfaces/Env.interface';
dotenv.config();
import development from "./development";
import production from './production';
import test from "./test";

let currentConfig: Env;

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