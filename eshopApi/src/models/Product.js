const mongoose = require('mongoose');
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:'Category',
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    image:{
        type:String,
        required:false
    },
    stock:{
        type:Number,
        min:0,
        required:true
    },
    rating:{
        type:Number,
        default:0,
        required:true
    }
},{
    timestamps:true
})

const Product=mongoose.model('Product',productSchema);
module.exports=Product;