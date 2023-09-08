const mongoose=require('mongoose');


const productsSchema =new mongoose.Schema({
    name :{
        type:String,
        require:[true,"Please enter Product Name"],
        trim:true,
        maxLength:[100,'ProductName Cannot Exceed 100 Charactres']
    },
    price:{
        type:Number,
        require:true,
        default:0.0
    },
    description:{
        type:String,
        require:[true,"Please enter Product description"],
    },
    rate:{
        type:String,
        default:0
    },
    images:[{

    }]
})