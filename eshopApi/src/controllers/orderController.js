const Order=require('../models/Order');

const orderlist=async(req,res)=>{
    try{

        const orders=await Order.find().populate("user").populate("product");
        if(orders){
            res.status(200).send(orders);
        }else{
            res.status(404).send('No orders found');
        }
    }catch(error){
        res.status(500).send(error.message);
    }

}
const createOrder=async(req,res)=>{
    try{
        const order= await Order.create(req.body);
        if(order){
        res.status(200).send({message:'Order created successfully',order:order});
    }
    else{
        res.status(400).send('Something went wrong');
    }
    }catch(error){
        res.status(500).send(error.message);
    }
}


const getOrders=async(req,res)=>{
    try{
        const order=await Order.findById(req.params.id).populate("user").populate("product");
        if(order){
            res.status(200).send(order);
        }else{
            res.status(404).send('Order not found');
        }
    }catch(error){
        res.status(500).send(error.message);
    }
}


const updateOrder=async(req,res)=>{
    try{
        const order=await Order.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!order){
            res.status(400).send('Something went wrong');
        }
        res.status(200).send({message :"Updated successfully", order:order});
    }catch(error){
        res.status(500).send(error.message);
    }
}

const deleteOrder=async(req,res)=>{
    try{
        const order=await Order.findByIdAndDelete(req.params.id);
        if(!order){
            res.status(400).send('Something went wrong');
        }else{
            res.status(200).send({message:'Order deleted successfully',order:order});
        }
    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports={orderlist,createOrder,updateOrder,deleteOrder,getOrders};