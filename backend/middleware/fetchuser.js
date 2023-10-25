const jwt=require('jsonwebtoken');
const JWT_SECRET="My";//This var uses to generate a auth token
const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send("Please get authenticate with a valid auth token")
    }
    try {
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user; 
        next();
    } catch (error) {
        console.log(error)
        res.status(401).send("Please get authenticate with a valid auth token");
    }
}

module.exports=fetchuser;