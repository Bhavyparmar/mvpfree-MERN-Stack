const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const UserInfo=require("../models/User-info");
const UploadProject=require("../models/Uploadproject"); 
const fetchuser=require("../middleware/fetchuser");
const multer=require('multer')
const upload=multer({dest:"upload/"})

//ROUTE 1-This api is called for inserting Using POST:"/api/bid/createproject" (inserting data to bid collections) login required
router.post("/createproject",upload.single('pfile'),fetchuser,async(req,res)=>{
    const{pname,pskill,pbudget,pdesc}=req.body;
    const data=await UploadProject.create({
        pname,
        pskill,
        pbudget,
        pfile:req.file.path,
        pdesc,
        user:req.user.id
    })
    let success=true;
    res.send({success,data});
})



//ROUTE 2-This api is called for deleting Using POST:"/api/bid/deleteproject" (inserting data to bid collections) login required
router.post("/deleteproject/:id",fetchuser,async(req,res)=>{ 
    const data=await UploadProject.findByIdAndDelete(req.params.id);
    res.send("Successfully deleted your project");
})



//ROUTE 3-This api is called for getting the data Using get:"/api/bid/showproject" (fetching data from bid collections) login required
router.get("/showproject",fetchuser,async(req,res)=>{ 
    let findResult = await UploadProject.find();//Particular bhavy record is fetched
    res.send(findResult);
})

//ROUTE 4-This api is called for getting the particular data Using get:"/api/bid/showproject" (fetching data from bid collections) login required
router.get("/showproject/:id",fetchuser,async(req,res)=>{ 
    if(mongoose.Types.ObjectId.isValid(req.params.id)) {
        let findResult = await UploadProject.find({_id:req.params.id});//Particular record is fetched
        res.send(findResult);
      }
})




//ROUTE 5-This api is called for getting the data of client on bid showing  get:"/api/bid/showproject" (fetching data from user collections) login required
router.get("/showprojclient/:id",fetchuser,async(req,res)=>{
    let findResult = await UserInfo.find({"user":req.params.id});//Particular id record is fetched
    res.send(findResult);
    // let client=await UserInfo.find({"user":req.user.id});//User info is fetched
    // res.write(JSON.stringify(client));
    // res.end();
})


module.exports=router;