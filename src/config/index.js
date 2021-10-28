require("dotenv").config();
//cloud
module.exports = {
  PORT: process.env.PORT || 8080,
  DB_HOST: process.env.DB_HOST || "127.0.0.1",
  DB_USER: process.env.DB_USER || "jaco",
  DB_PASS: process.env.DB_PASS || "1234",
  DB_NAME: process.env.DB_NAME || "portfolio",
  DB_PORT: process.env.DB_PORT || 3306,
  DB_CHARSET: process.env.DB_CHARSET || "utf8",
  DB_CONNECTION_LIMIT: process.env.DB_CONNECTION_LIMIT || 10,
  DB_CONNECTION_TIMEOUT: process.env.DB_CONNECTION_TIMEOUT || 100000,
};
  
const en= {"development": {
  "username": "jaco",
  "password": "1234",
  "database": "portfolio",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
}
const cloud={"development": {
  "username": "uumg6iwu5jby83o2",
  "password": "Hj9gZ2CSGcSDOoVSsOcx",
  "database": "ba2p3trgs9vrowuqvc6i",
  "host": "ba2p3trgs9vrowuqvc6i-mysql.services.clever-cloud.com",
  "dialect": "mysql"
}
}