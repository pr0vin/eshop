const Category=require('../models/Category');

const getCategories=async(req,res)=>{
    try {
        const categories=await Category.find();
        if(categories){
            res.status(200).send(categories);
        }else{
            res.status(404).send('No categories found');
        }
    } catch (error) {
        res.send(error.message)
    }
}

const createCategory=async(req,res)=>{

  try {
      const category= await Category.create(req.body);
      if(!category){
          res.status(400).send({message:"Something went wrong"})
      }else{
          res.status(201).send({message:"Created successfully", category:category})
      }
  } catch (error) {
    
  }
}

const updateCategory=async(req,res)=>{
    try {
        const category=await Category.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!category){
            res.status(400).send({message:"Something went wrong"})
        }else{
        res.send({message:"Updated successfully", category:category})
        }
    } catch (error) {
        res.send(error.message)
    }
}

const deleteCategory=async(req,res)=>{
    try {
        const category=await Category.findByIdAndDelete(req.params.id);
        if(!category){
            res.status(400).send({message:"Something went wrong"})
        }else{
        res.send({message:"Deleted successfully", category:category})
        }
    } catch (error) {
        res.send(error.message)
    }
}

module.exports={getCategories,createCategory,updateCategory,deleteCategory};