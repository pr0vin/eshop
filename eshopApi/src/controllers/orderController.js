const Order=require('../models/Order');
const Cart=require('../models/Cart');
const Product=require('../models/Product');

const orderlist=async(req,res)=>{
    try{

        const orders=await Order.find();
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
        const cart= await Cart.findOne({userId:req.params.id})
       if(!cart){
        res.status(404).send({message: 'No cart found'})
       }
       else{
        const charges=Number.parseInt(req.body.charges)
        const items=cart.items
        if(items.length > 0){
            for(let i=0; i<items.length; i++){
               const item=items[i].productId
               const product= await Product.findById(item)
               if(!product){
                 res.status(404).send({message: 'product not found'})
               }
               else if(product.stock >=cart.items[i].quantity){

                product.stock -= Number.parseInt(cart.items[i].quantity)
                await product.save();
               }
               else 
               {
                cart.items.splice(i, 1);
                if (cart.items.length == 0) {
                    cart.totalPrice = 0;
                } else {
                    cart.totalPrice = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
                }
                await cart.save();
                //  res.send({message:`Sorry only ${product.stock} is avaliable`})
               
               }
              
            }

            if(cart.items.length > 0){
            const data={
                userId:req.params.id,
                items:cart.items,
                shippingAddress:req.body.shippingAddress,
                subtotal:cart.totalPrice,
                charges:charges,
                grandtotal:charges+Number.parseInt(cart.totalPrice)
    
            }
        

       const order= await Order.create(data)
       if(!order){

        res.status(404).send({message: 'something went wrong'})
       }else{
            

        cart.items=[];
        cart.totalPrice=0;
        await cart.save();
        res.status(200).send({message:"Order saved successfully",order: order})
       }
       }else{
        res.send("No item remaining")
       }
    }else{
        res.send("No item remaining")
       }
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