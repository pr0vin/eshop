const Cart=require('../models/Cart');
const Product=require('../models/Product');


// add to cart list
const addToCart=async(req,res)=>{

    const {id}=req.params;
    const {productId} = req.body;
    const quantity=Number.parseInt(req.body.quantity);


   try {
     const product=await Product.findById(productId);
     if(!product){
         return res.status(404).send({message:"Product not found"});
     }
 
     // cart
   
     const cartData= await Cart.findOne({userId: id});
     if(!cartData){
        const newItem=new Cart({userId:id,items:[{productId:productId,quantity:quantity}]});
        await newItem.save();
         return res.status(201).send({message:"Cart created",cart:newItem});
     }else{
       
         const index=cartData.items.findIndex(item=>item.productId==productId);
        //  empty list if quantity is zero
         if (index !== -1 && quantity <=0) {
            cartData.items.splice(index, 1);
            if (cartData.items.length === 0) {
                cartData.totalPrice = 0;
            } else {
                cartData.totalPrice = cartData.items.map(item => item.total).reduce((acc, next) => acc + next);
            }
        }
         else if(index!==-1){
            // item found
            const updatedItem=cartData.items[index];
            updatedItem.quantity +=quantity;
            updatedItem.total=updatedItem.quantity*product.price;
            cartData.totalPrice = cartData.items.map(item => item.total).reduce((acc, next) => acc + next);
            await cartData.save();

            return res.status(200).send({message:"Item updated",cart:cartData});
         }
         else if(quantity > 0){
            // item found with quantity greater than 0

            const newItem={productId:productId,quantity:quantity,
                total:quantity*product.price
            };
            cartData.items.push(newItem);
            cartData.totalPrice = cartData.items.map(item => item.total).reduce((acc, next) => acc + next);
            
            await cartData.save();

            return res.status(201).send({message:"Item added to cart",cart:cartData});
        
         }

         else{
            return res.status(400).send({message:"Invalid quantity"});

         }
         
         await cartData.save();
         return res.status(201).send({message:"Item added to cart",cart:cartData});

        
     }
   } catch (error) {
    
    res.status(500).send({message:error.message});
   }


   
}


// get cart items
const getCartItems=async(req,res)=>{
    const {id}=req.params;
    const cart= await Cart.findOne({userId:id}).populate('items.productId');
    if(!cart){
        return res.status(404).send({message:"Cart not found"});
    }else{
        return res.status(200).send(cart);
    }
}


// remove item from cart
const removeFromCart=async(req,res)=>{
    const {id}=req.params;
    const {productId} = req.body;
   try {
     const cart =await Cart.findOne({userId:id});
     if(!cart){
         return res.status(404).send({message:"Cart not found"});
     }
 
     const index=cart.items.findIndex(item=>item.productId==productId);
     if (index!== -1) {
         cart.items.splice(index, 1);
         if (cart.items.length == 0) {
             cart.totalPrice = 0;
         } else {
             cart.totalPrice = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
         }
         await cart.save();
         return res.status(200).send({message:"Item removed from cart",cart:cart});
     }
     else{
         return res.status(404).send({message:"Item not found"});
     }
   } catch (error) {
    
    res.status(500).send({message:error.message});
   }




}


const emptyCart=async(req,res)=>{
    const {id}=req.params;
   try {
    
     const cart =await Cart.findOne({userId:id});
     if(!cart){
         return res.status(404).send({message:"Cart not found"});
     }
     cart.items=[];
     cart.totalPrice=0;
     await cart.save();
     return res.status(200).send({message:"Cart emptied",cart:cart});

   } catch (error) {
    
    res.status(500).send({message:error.message});
   }
}


module.exports={addToCart,getCartItems,removeFromCart,emptyCart};