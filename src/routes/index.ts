import { Router } from "express";
import user from './user'

const router = ()=>{
  const app = Router();
  user(app);

  return app
}

export default router