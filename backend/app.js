const express=require('express')
const app=express();

//Route Url File
const products = require('./routes/product')

//API With Routes
app.use('/api/v1',products)

module.exports=app;