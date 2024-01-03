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

    images:[
        {
            image:{
                type:String,
                required:true
            }
        }
    ],

    category:{
        type:String,
        required:[true,"Please enter the Product category"],
        enum:{
            values:[
                'Electronics',
                'Mobile Phones',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message:'Please Select correct category'
        }
    },

    seller:{
        type:String,
        required:[true,"Please Enter Product Seller"]
    },

    stock:{
        type:Number,
        required:[true,'Please Enter Product stock'],
        maxLength:[20,'Product Stock Cannot Exceed 20']
    },

    numofReviews:{
        type:Number,
        default:0
    },

    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:String,
                required:true
            },
            Comment:{
                type:String,
                required:true
            }
        }
    ],

    createAt:{
        type:Date,
        default:Date.now()
    }
})

let schema=mongoose.model('Product',productsSchema)

module.exports = schema