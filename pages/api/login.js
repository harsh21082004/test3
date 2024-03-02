// Import necessary modules
import connectDb from "../../middleware/mongoose";
import User from "../../models/user";
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  await connectDb();

  if (req.method === 'POST') {
    try {
      let user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(400).json({ error: "Invalid Credentials" });
      }

      if (user.isVerified === true) {
        const hashedPassword = CryptoJS.SHA256(req.body.password).toString();

        if (hashedPassword === user.password) {
          var token = jwt.sign({ email: user.email, name: user.name, image: user.image }, 'jwtsecret',{
            expiresIn: 20
          });
          //   console.log(user.image);
          return res.status(200).json({ token, success: "Successfully logged in, redirecting to homepage" });
        } else {
          return res.status(400).json({ error: "Invalid Password" });
        }
      } else {
        return res.status(400).json({ error: "Please verify your email" });
      }
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(400).json({ error: "Bad request" });
  }
};

export default handler;
