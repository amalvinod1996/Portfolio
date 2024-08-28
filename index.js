import dotenv from "dotenv"
dotenv.config()

import express from "express"
import path from "path"
import { fileURLToPath } from 'url';
import  connection from "./connectToMysql.js";



const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, '/assets')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});
 


app.post("/sendMessage",(req,res)=>{
    
    
})

app.listen(3000,(req,res)=>{ 
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }
        console.log('Connected to the MySQL database!');

        // const data = {
        //     cust_name: 'John Doe',
        //     email_id: 'hon@getMaxListeners.com',
        //     msg:""

        // };
        // connection.query('INSERT INTO messages SET ?', data, (err, result) => {
        //     if (err) throw err;
        //     console.log('Data inserted successfully:', result.affectedRows);
        // });

        connection.query('SELECT * FROM messages', (err, results) => {
            if (err) throw err;
            console.log(results);
        });
    });
    console.log("Server is running port 3000")}
    
)