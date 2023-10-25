//This model is for the uploadproject collection
const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    pname:{
        type:String,
        required:true
    },
    pskill:{
        type:String,
        required:true
    },
    pbudget:{
        type:String,
        required:true
    },
    pfile:{
        type:String,
        default:"file.pdf"
    },
    pdesc:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

const UploadProject=mongoose.model("uploadproject",UserSchema);
module.exports=UploadProject;