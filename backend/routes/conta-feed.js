const express=require('express');
const router=express.Router();
const Contact=require("../models/Contact");
const {body,validationResult}=require('express-validator');
const Feedback = require('../models/Feedback');
const fetchuser = require('../middleware/fetchuser');
//ROUTER 1-This api is called for adding contact us Using POST:"/api/auth/contact" (inserting the data to contactus collection)
router.post("/contact",fetchuser,async(req,res)=>{
    const {name,email,pnumber,msg}=req.body;
    let data=await Contact.create({
        name:name,
        email:email,
        pnumber:pnumber,
        msg:msg,
        user:req.user.id
    });
    let success=true
    res.send({success,data}); 
})

//ROUTER 2-This api is called for adding feedback us Using POST:"/api/auth/feedback" (inserting the data to feedback collection)
router.post("/feedback",async(req,res)=>{
    const {name,msg}=req.body;
    let data=await Feedback.create({
        name:name,
        msg:msg
    });
    let success=true
    res.send({success,data});
})
module.exports=router;