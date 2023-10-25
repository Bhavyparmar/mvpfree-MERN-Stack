const express=require('express');
const router=express.Router();
const User=require("../models/User");
const UserInfo=require("../models/User-info");
const {body,validationResult}=require('express-validator');
const fetchuser=require("../middleware/fetchuser")
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const JWT_SECRET="My";
let success=false;



//ROUTER 1-This api is called for creating user Using POST:"/api/auth/createuser" (inserting the data to Users collection)-Login not required
router.post("/createuser",[
    body('name','Enter a valid name').isLength({min:3}),//Checking the validation
    body('email','Enter a valid email').isEmail(),//Checking the validation
    body('password','Enter a valid password').isLength({min:3})//Checking the validation
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){//If any validation is break then below res is send 
        return res.status(400).json({success,errors:errors.array()})
    }
    try {
        const {name,password,email}=req.body;
        let user= await User.findOne({email:email})
        if(user){
          return  res.status(400).send({problem:"User is already exists try using the different email"});
        }
        const salt=await bcrypt.genSalt(10);
        const secpass=await bcrypt.hash(password,salt);
        user=await User.create({
            name:name,
            password:secpass,
            email:email
        });
        const data={
            user:{
                id:user.id,
                email:user.email
            }
        }
        success=true;
        const authtoken=jwt.sign(data,JWT_SECRET);
        res.send({success,authtoken});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error occured")
    }
})



//ROUTER 2-Authenticate a User Using:POST "api/auth/login".No login required
router.post("/login",[
    //This is for the validation
    body('email','Enter a valid email').isEmail(),
    body('password','Password should not be blank').exists(),
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array() });
    }
    const{email,password}=req.body;
    try {
        let user=await User.findOne({email});
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
        res.send({success,authtoken,user});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
})




//ROUTE 3- Get loggedin User details Using:POST "api/auth/getuser".Login required

router.get("/getuser",fetchuser,async(req,res)=>{
    try{
        const {id,email}=req.user;
        const user=await User.findById(id).select("-password");
        // res.send({id,email}) //Fetching from the token id and email
        res.send({user})
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal server error");
    }
})



//ROUTE 4- Get update User password Using:POST "api/auth/uppass".Login required
//When only password is given it throw error
router.post("/uppass/:id",async(req,res)=>{
    try {
        const {password,newpassword}=req.body;
        const data= await User.findById(req.params.id);
        let comparePass=await bcrypt.compare(password,data.password);
        if(!comparePass){
            let success=false;
            return res.status(500).send({success});
        }
        const newPass={}
        const salt=await bcrypt.genSalt(10);
        const secpass=await bcrypt.hash(newpassword,salt); 
        if(newpassword)(newPass.password=secpass);
        const datas=await User.findByIdAndUpdate(req.params.id,{$set:newPass},{new:true});
        let success=true;   
        res.send({success}); 
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
})

module.exports=router;