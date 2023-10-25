//This model is for feedback collections
const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
    name:{
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

const Feedback=mongoose.model("feedback",UserSchema);
module.exports=Feedback;