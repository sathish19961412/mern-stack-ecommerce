const express=require('express')
const app=express();

//Create Expressjs response json data
app.use(express.json());
//Route Url File
const products = require('./routes/product')
const listProducts=require('./routes/product')

//API With Routes
app.use('/api/v1',products)
module.exports=app;