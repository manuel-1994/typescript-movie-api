const production = {
  port: process.env.PORT,
  DB: {
    host: "localhost",
    database: "moviesDev" 
  }
}

export default production;