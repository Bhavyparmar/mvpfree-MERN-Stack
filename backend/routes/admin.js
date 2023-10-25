const express=require('express');
const router=express.Router();
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const JWT_SECRET="My";
const Chat=require("../models/Chat");
//Middle ware
const fetchuser=require("../middleware/fetchuser");
// All models
const UserInfo=require("../models/User-info");
const User=require("../models/User");
const Admin=require("../models/Admin");
const Contact=require("../models/Contact");
const Bid=require("../models/Bid");
const Feedback = require('../models/Feedback');
const UploadProject = require('../models/Uploadproject');

//Route 1- /api/admin/insert It will insert the admin
//Route 1- /api/admin/insert It will insert the admin
router.post("/insert",async(req,res)=>{
    const {email,password}=req.body;
    try {
        let user= await Admin.findOne({email:email})
        if(user){
          return  res.status(400).send("User is already exists try using the different email");
        }
        const salt=await bcrypt.genSalt(10);
        const secpass=await bcrypt.hash(password,salt);
        user=await Admin.create({
            email,
            password:secpass,
        });
        const data={
            user:{
                id:user.id,
                email:user.email
            }
        }
        let success=true;
        const authtoken=jwt.sign(data,JWT_SECRET);
        res.send({success,authtoken});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error occured")
    }
})


//Route 2- /api/admin/loginadmin It will login the admin
//Route 2- /api/admin/loginadmin It will login the admin
router.post("/loginadmin",async(req,res)=>{
    const{email,password}=req.body;
    try {
        let user=await Admin.findOne({email}); 
        if(!user){
           return res.status(400).send({error:"Login with correct credentials"})
        }
        const passCompare=await bcrypt.compare(password,user.password);
        if(!passCompare){
           return res.status(400).send({problem:"Login with correct credentials"});
        }
        const data ={
            user:{
                id:user.id,
                email:user.email
            }
        }
        success =true;
        const authtoken=jwt.sign(data,JWT_SECRET);
        res.send({success,authtoken});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
})

//Route 3- /api/admin/contact It will fetch the contact collections admin
//Route 3- /api/admin/contact It will fetch the contact collections admin

router.get("/contact",fetchuser,async(req,res)=>{
    let data=await Contact.find();
    res.send(data);
})

//Route 4- /api/admin/feedback It will fetch the feedback collections admin
//Route 4- /api/admin/feedback It will fetch the feedback collections admin

router.get("/feedback",fetchuser,async(req,res)=>{
    let data=await Feedback.find();
    res.send(data);
})

//Route 5- /api/admin/project It will fetch the upload project collections admin
//Route 5- /api/admin/project It will fetch the upload project collections admin

router.get("/project",fetchuser,async(req,res)=>{
    let data=await UploadProject.find();
    res.send(data);
})


//Route 6- /api/admin/bid It will fetch the bid collections admin
//Route 6- /api/admin/bid It will fetch the bid collections admin

router.get("/bid",fetchuser,async(req,res)=>{
    let data=await Bid.find();
    res.send(data);
})

//Route 7- /api/admin/userinfo It will fetch the userinfo collections admin
//Route 7- /api/admin/userinfo It will fetch the userinfo collections admin

router.get("/userinfo",fetchuser,async(req,res)=>{
    let data=await UserInfo.find();
    res.send(data);
})

module.exports=router;