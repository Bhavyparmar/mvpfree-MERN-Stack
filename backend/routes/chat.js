const express=require('express');
const router=express.Router();
const Chat=require("../models/Chat");
const fetchuser=require("../middleware/fetchuser");




//Client has freelancer bid list from these they can find user Id from bid
//And then from that user id they insert the message to collection
//Freelancer can fetch the chat from their user id
//And it can chat from client id to


//ROUTE 1-This api is called for inserting from client side Using POST:"/api/chat/insertmsgcl" (inserting data to chat collections) login required
//Freelancer id is fetched from the bid proposals
router.post("/insertmsgcl",fetchuser,async(req,res)=>{
    const{msg,reciever}=req.body;
    const data=await Chat.create({  
        sender:req.user.id,
        msg,
        reciever
    })
    res.send("Message is sent")
})



//ROUTE 2-This api is called for showing from client side Using GET:"/api/chat/showmsgcl" (inserting data to chat collections) login required
router.get("/showmsgcl",fetchuser,async(req,res)=>{
    let data=await Chat.find(({"sender":req.user.id}));
    let data1=await Chat.find(({"reciever":req.user.id}));
    res.write(JSON.stringify(data));
    res.write(JSON.stringify(data1));
    res.end();
})



//ROUTE 3-This api is called for inserting from freelancer side Using POST:"/api/chat/insertmsgfl" (inserting data to chat collections) login required
//here sender is freelancer and receiver is a client so from message we find id and pass it
router.post("/insertmsgfl",fetchuser,async(req,res)=>{
    const{msg,reciever}=req.body;
    const data=await Chat.create({
        sender:req.user.id,
        msg,
        reciever
    })
    res.send("Message is sent")
})


//ROUTE 4-This api is called for showing from freelancer side Using GET:"/api/chat/showmsgfl" (inserting data to chat collections) login required
router.get("/showmsgfl",fetchuser,async(req,res)=>{
    let data=await Chat.find(({"sender":req.user.id}));
    let data1=await Chat.find(({"reciever":req.user.id}));
    res.write(JSON.stringify(data));
    res.write(JSON.stringify(data1));
    res.end();
})

    
module.exports=router;