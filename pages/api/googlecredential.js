import connectDb from "@/middleware/mongoose";
import User from "@/models/user";
import { NextResponse } from "next/server";

const handler = async (req, res) => {
    await connectDb();
    if (req.method === 'POST') {
    const { name, email, image } = await req.body;
    const newUser = new User({
        name,
        email,
        image,
        isVerified: true
    })
    await newUser.save();
    return res.status(201).json({messege: "User created successfully"})
    }else{
        return res.status(400).json({error: "Bad request"})
    }
}

export default handler;