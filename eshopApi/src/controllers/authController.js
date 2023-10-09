const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
require('dotenv').config();

const login =async(req,res)=>{

    try{
        const user=await User.findOne({email:req.body.email});
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){

                const token=jwt.sign({
                    userId:user._id,
                    isAdmin:user.isAdmin,
                    role:user.role
                },
                process.env.SECRET,{expiresIn:3600});
                res.status(200).json({user:user.email,token:token});
            }else{
                res.status(401).json("invalid password");
            }
        }else{
            res.status(401).json("invalid email");
        }
    }catch(error){
        res.status(500).send(error.message);
    }
}

const register =async(req,res)=>{   
  
    try{
       const user=await User.findOne({email:req.body.email});
       if(user){
        res.status(200).json("user already exists!");
       }else{
        const newUser={
            name:req.body.name,
            password:bcrypt.hashSync(req.body.password,10),
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address,
            role:req.body.role,
            image:req.body.image,
            isAdmin:req.body.isAdmin
        };
        
       const savedUser= await User.create(newUser);
        res.status(200).json(savedUser);
    }

    }catch(err){
        res.status(500).json(err);
    }

    
}

module.exports ={login,register}