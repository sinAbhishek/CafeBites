import mongoose from "mongoose";
const CafeSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    time:{
        type:Number,
        required:true,
    },
    Category:{
        type:String,

    }
});
export default mongoose.model("Cafe",CafeSchema)