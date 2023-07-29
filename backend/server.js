const app = require('./app');
const dotenv=require('dotenv');
const path=require('path');
const connectDatabase = require('./config/database');

//Config File
dotenv.config({path:path.join(__dirname,"config/config.env")});

//Database Connect
connectDatabase();

//App Run Server
app.listen(process.env.PORT,()=>{
    console.log(`My Server listing to The port: ${process.env.PORT} in ${process.env.NODE_ENV} `);
})