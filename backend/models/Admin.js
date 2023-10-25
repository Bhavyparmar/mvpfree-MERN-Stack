const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        require:true,
        type:String
    }
})
const Admin=mongoose.model("admin",UserSchema);
module.exports=Admin