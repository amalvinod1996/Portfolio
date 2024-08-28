import dotenv from "dotenv"
dotenv.config()
 
 import mysql2 from 'mysql2';
 console.log(process.env.HOST)
// Create a connection to the MySQL database
const connection = mysql2.createConnection({
  
  host: process.env.HOST,         // Your MySQL server hostname or IP
  user: `${process.env.USER}`,     // Your MySQL username
  password: `${process.env.DB_PASSWORD}`, // Your MySQL password
  database: `${process.env.DB_NAME}`  // The name of your MySQL database
});

export default connection;
