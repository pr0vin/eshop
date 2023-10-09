const mongoose=require('mongoose');

const categorySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    }
},
{
    timestamps:true
})
module.exports=mongoose.model('Category',categorySchema);