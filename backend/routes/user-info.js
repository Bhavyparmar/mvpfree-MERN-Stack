const express=require('express');
const router=express.Router();
const UserInfo=require("../models/User-info");
const fetchuser=require("../middleware/fetchuser")
const multer=require('multer');
const { json } = require('react-router-dom');
const upload=multer({dest:"upload/"})


//ROUTE 1-This api is called for adding user-info Using POST:"/api/user-info/adduserinfo" (inserting the data to contactus collection)
router.post("/adduserinfo",fetchuser,async(req,res)=>{
    const {name,company,photo,bio,dob,country,phone,website,twitter,linkedin}=req.body;
    const id=req.user.id;
    const check=UserInfo.findById(id);
    if(!check){
      return  res.status(500).send("Please login properly");
    }
    const data=UserInfo.create({
        name,
        company,
        photo,
        bio,
        dob,
        country,
        phone,
        website,
        twitter,
        linkedin,
        user:req.user.id
    })
    res.send("Data is inserted");
})



//ROUTE 2-This api is called for updating Using POST:"/api/user-info/igeneral" (updating the general user info data to userinfos collection)
router.post("/igeneral/:id",fetchuser,upload.single('photo'),async(req,res)=>{
    const {name,company}=req.body;
    const newdata={};
    if(name){newdata.name=name}
    if(company){newdata.company=company}
    if(req.file){newdata.photo=req.file.path}
    let data=await UserInfo.find({user:req.params.id});
    let a=data[0]._id;
    // if(req.user.id!=data.user.toString()){
    //     return  res.status(500).send("Your Id is not by auth-token found");
    // }
    if(!data){
        return  res.status(500).send("Your Id is not found");
    }
    data=await UserInfo.findByIdAndUpdate(a,{$set:newdata},{new:true});
    res.send("updated successfully");
})



//ROUTE 3-This api is called for updating Using POST:"/api/user-info/iinfo" (updating the info user info data to userinfos collection)
router.post("/iinfo/:id",fetchuser,async(req,res)=>{
    const {bio,dob,country,phone,website}=req.body;
    const newdata={};
    if(bio){newdata.bio=bio}
    if(dob){newdata.dob=dob}
    if(country){newdata.country=country}
    if(phone){newdata.phone=phone}
    if(website){newdata.website=website}
    let data=await UserInfo.find({user:req.params.id});
    let a=data[0]._id;
    
    data=await UserInfo.findByIdAndUpdate(a,{$set:newdata},{new:true});
    let success=true
    res.send({success});
})



//ROUTE 4-This api is called for updating Using POST:"/api/user-info/isocial" (updating the SocialLinks user info data to userinfos collection)
router.post("/isocial/:id",fetchuser,async(req,res)=>{
    const {twitter,linkedin}=req.body;
    const newdata={};
    if(twitter){newdata.twitter=twitter}
    if(linkedin){newdata.linkedin=linkedin}
    let data=await UserInfo.find({user:req.params.id});
    let a=data[0]._id;
    data=await UserInfo.findByIdAndUpdate(a,{$set:newdata},{new:true});
    let success=true
    res.send({success});
})



//ROUTE 5-This api is called for getting Using get:"/api/user-info/getinfo" (Getting the  user info data to userinfos collection)


router.get("/getinfo/:id",fetchuser,async(req,res)=>{
    let data=await UserInfo.find({
        user : req.params.id
       },{
          "name": 1,
          "photo": 1
       }
       );
       res.write(JSON.stringify(data));
       res.end() 
})

router.get("/userdata/:id",fetchuser,async(req,res)=>{
    let data=await UserInfo.find({"user":req.params.id})
    res.send(data)
})

module.exports=router;