const mongoose= require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }


},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);

module.exports=User;