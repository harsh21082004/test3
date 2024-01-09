import mongoose from "mongoose";

const connectDb = handler => async (req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect('mongodb+srv://harshtiwariup2004:harsh2004@cluster0.y3do7jo.mongodb.net/codebyte')
    return handler(req,res)
}

export default connectDb;