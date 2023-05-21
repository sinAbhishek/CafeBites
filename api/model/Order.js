import mongoose from "mongoose";

const OrderSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
});
export default mongoose.model("Orders",OrderSchema)