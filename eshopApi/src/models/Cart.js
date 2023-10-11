const mongoose=require('mongoose');

const ItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    },
    total:{
        type:Number,
        default:0
    }

});


const CartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    items:[ItemSchema],
    totalPrice:{
        type:Number,
        required:true,
        default:0
    }
});

const Cart=mongoose.model('Cart',CartSchema);

module.exports=Cart;