//This model is for the user-info collection
const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        
    },
    company:{
        type:String,
        
    },
    photo:{
        type:String,
        default:"Images.png"
    },
    bio:{
        type:String,
        
    },
    dob:{
        type:String,
        
    },
    country:{
        type:String,
        
    },
    phone:{
        type:String,
        
    },
    website:{
        type:String,
        
    },
    twitter:{
        type:String,
        
    },
    linkedin:{
        type:String,
        
    }
})

const UserInfo=mongoose.model("userinfo",UserSchema);
module.exports=UserInfo;