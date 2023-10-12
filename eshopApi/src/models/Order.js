const mongoose = require('mongoose');
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
const orderSchema =mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
   items:[ItemSchema],
    shippingAddress: {
        type:String,
        required: true
    },
    status: {
        type: Boolean,
        default: 0
    },
    subtotal: {
        type: Number,
        required: true
    },
    charges:{
        type:Number,
        default:0,
    },
    grandtotal:{
        type:Number,
        required: true
    }
    ,
    payment: {
        type: Boolean,
        default: 0
    },
    delivery: {
        type: Boolean,
        default: 0
    },

},
{
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;