//This model is for the bid collection
const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    p_id:{
        type:String,
        required:true
    },
    bamount:{
        type:String,
        required:true
    },
    bdate:{
        type:Date,
        default:Date.now
    },
    bday:{
        type:String,
        required:true
    },
    bproposal:{
        type:String,
        required:true
    },
    
})

const Bid=mongoose.model("bid",UserSchema);
module.exports=Bid;