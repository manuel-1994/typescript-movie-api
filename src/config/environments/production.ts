import { Env } from '../../interfaces/Env.interface';

const production:Env={
  port: process.env.PORT,
  db_uri: process.env.DB_URI
}

export default production;