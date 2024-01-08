import connectDb from "../../middleware/mongoose";
import user from "../../models/user";

const handler = async (req,res)=>{
    if(req.method == 'POST'){
        console.log(req.body)
        let u = new user(req.body)
        await u.save();
        res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"bad request"})
    }
}

export default connectDb(handler);