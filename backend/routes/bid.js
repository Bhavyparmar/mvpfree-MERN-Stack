const express=require('express');
const router=express.Router();
const UserInfo=require("../models/User-info");
const User=require("../models/User");
const Bid=require("../models/Bid");
const fetchuser=require("../middleware/fetchuser");


//ROUTE 1-This api is called for inserting Using POST:"/api/bid/makebid" (inserting data to bid collections) login required
router.post("/makebid",fetchuser,async(req,res)=>{
    const{p_id,bamount,bproposal,bday}=req.body;
    const data=await Bid.create({
        p_id,
        bamount,
        bproposal,
        bday,
        user:req.user.id 
    })
    res.send(data);
})



//ROUTE 2-This api is called for showing Using GET:"/api/bid/showbid" (showing data to bid collections and freelancer profile) login required
router.get("/showbid/:id",fetchuser,async(req,res)=>{
    try {
        let data=await Bid.find({p_id:req.params.id});
        res.write(JSON.stringify(data));
        res.end();
        
    } catch (error) {
        res.send("Something went wrong"+error)
    }
})


//ROUTE 3-This api is called for assisgn the bid Using GET:"/api/bid/assignbid" (updating data to bid collections and freelancer profile) login required
router.post("/assignbid/:id",fetchuser,async(req,res)=>{
    const{passign}=req.body;
    let data=await Bid.find({"_id":req.params.id});
    if(!data){
        return res.status(400).send("Bid id is not founded")
    }
    let bidass={};
    if(passign){bidass.passign=passign}
    data=await Bid.findByIdAndUpdate(req.params.id,{$set:bidass},{new:true});
    res.write(JSON.stringify(data));
    res.end();
})

module.exports=router;