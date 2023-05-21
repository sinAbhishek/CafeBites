import User from "../model/User"
export const createUser=async(req,res,next)=>{
   const newuser=new User(req.body)
    
    try{
    const savedUser=await newuser.save
    res.status(200).json(savedUser)
    }catch(err){
    next(err);
    }
}
