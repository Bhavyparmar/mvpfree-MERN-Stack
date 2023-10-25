//This model is for the users collection
const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"user"
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const User=mongoose.model("user",UserSchema);
module.exports=User;