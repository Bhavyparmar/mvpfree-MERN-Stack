//This model is for contactus collections
const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pnumber:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

const Contact=mongoose.model("contactus",UserSchema);
module.exports=Contact;