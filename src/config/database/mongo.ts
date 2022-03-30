import mongoose from "mongoose";

function database (uri:string|undefined):Promise<typeof mongoose> {
  return mongoose.connect(`${uri}`)
} 
  
export {database, mongoose}
