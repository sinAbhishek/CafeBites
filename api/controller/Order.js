import Order from "../model/Order.js";



export const createOrder=async(req,res,next)=>{
    const order=new Order(req.body)
    try{
        const savedOrder=await order.save()
        res.status(200).json(order);
    }catch(err){
        next(err);
    }
}
