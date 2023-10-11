const mongoose = require('mongoose');
const orderSchema =mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products:
       { type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true}
    ,
    shippingAddress: {
        type:String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: 0
    },
    total: {
        type: Number,
        required: true
    },
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