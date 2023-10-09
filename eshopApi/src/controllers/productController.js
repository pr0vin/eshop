const Product=require('../models/Product');

const getProducts=async(req,res)=>{
   try {
     const products=await Product.find().populate('category');
     if(!products){
        res.status(404).send("No products found")
     }else{
        res.status(200).send(products)
     }
   } catch (error) {
    res.send(error.message)
   }
}

const createProduct=async(req,res)=>{
 try {
       const product= await Product.create(req.body);
       if(!product){
           res.status(400).send("Something went wrong")
       }else{
           res.status(201).send({message:"Product created successfully",product:product})
       }
 } catch (error) {
    res.status(500).send(error.message)
 }
}

const updateProduct=async(req,res)=>{
    try {
        const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!product){
            res.status(400).send("Something went wrong")
        }else{
            res.status(200).send({message:"Product updated successfully",product:product})
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const deleteProduct=async(req,res)=>{
    try {
        const product=await Product.findByIdAndDelete(req.params.id);
        if(!product){
            res.status(400).send("Something went wrong")
        }else{
            res.status(200).send({message:"Product deleted successfully",product:product})
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports={getProducts,createProduct, updateProduct, deleteProduct}