
const express=require('express');
const { getProducts,listProducts } = require('../controllers/productController');

const router=express.Router();

router.route('/products').get(getProducts);
router.route('/listProducts').get(listProducts);

module.exports=router;