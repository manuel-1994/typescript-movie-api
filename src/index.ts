import config from "./config/environments";
import Server from "./server";

function main(){
  const server = Server.init(config.port);

  server.start(()=>{
    console.log(`Application running on: http://localhost:${config.port}`);
  })
}

main();