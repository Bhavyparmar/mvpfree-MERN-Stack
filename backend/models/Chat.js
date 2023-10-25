//This model is for the chat collection
const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    msg:{
        type:String,
        required:true
    },
    reciever:{
        type:String,
        required:true
    }
})

const Chat=mongoose.model("chat",UserSchema);
module.exports=Chat;