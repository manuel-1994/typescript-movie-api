import { Env } from '../../interfaces/Env.interface';

const development:Env = {
  port: "4000",
  db_uri: "mongodb://localhost/moviesDev"
}

export default development;