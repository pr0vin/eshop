const User=require('../models/User');
const bcrypt=require('bcryptjs');

// const createUser =async(req,res)=>{
   
  
//     try{
//        const user=await User.findOne({email:req.body.email});
//        if(user){
//         res.status(200).json("user already exists");
//        }else{
//         const newUser={
//             name:req.body.name,
//             password:bcrypt.hashSync(req.body.password,10),
//             email:req.body.email,
//             phone:req.body.phone,
//             address:req.body.address,
//             role:req.body.role,
//             image:req.body.image,
//             isAdmin:req.body.isAdmin
//         };
        
//        const savedUser= await User.create(newUser);
//         res.status(200).json(savedUser);
//     }

//     }catch(err){
//         res.status(500).json(err);
//     }

    
// }
const getUsers =async (req, res) => {

   try {
     const user = await User.find().select('-password');
     if(!user){
         res.status(404).json({message:"no users are there"});
     }else{
         res.status(200).json(user);
     }
   } catch (error) {
    res.send(error.message);
    
   }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            res.status(404).json({ message: "user not found" });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.send(error.message);
    }
}

const updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!user) {
            res.status(404).json({ message: "user not found" });
        } else {
            res.status(200).json({user:user, message:"user updated successfully!"});
        }
    } catch (error) {
        res.send(error.message);
    }
}

const deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({ message: "user not found" });
        } else {
            res.status(200).json({user:user, message:"user deleted successfully!"});
        }
    } catch (error) {
        res.send(error.message);
    }
}

module.exports={updateUserById,deleteUserById,getUsers,getUserById};