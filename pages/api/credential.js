// api/signin.js
import connectDb from "@/middleware/mongoose";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const handler = async (req, res) => {
  await connectDb();
  if (req.method === 'POST') {
    try {
      const { email } = req.body;
      let user = await User.findOne({ email });

      if (!user || !user.isVerified) {
        return res.status(400).json({ error: "Invalid Credentials" });
      }

      const token = jwt.sign({ email: user.email, name: user.name, image: user.image }, 'jwtsecret');
      return res.status(200).json({ token, success: "Successfully logged in, redirecting to homepage" });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(400).json({ error: "Bad request" });
  }
};

export default handler;
