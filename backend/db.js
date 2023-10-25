const mongoose=require('mongoose')
const mongoUri="mongodb://0.0.0.0:27017/mvpfree";
mongoose.set("strictQuery",true);
const connecToMongo=()=>{
    mongoose.connect(mongoUri,()=>{
        console.log("Connected to mongo")
    })
}

module.exports=connecToMongo;