import connectDb from "../../middleware/mongoose";
import User from "../../models/user";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method === 'POST') {

        const {name,email} = req.body;

        try {
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                // If email already exists, send a message and prevent the save
                return res.status(400).json({ error: "Email already exists. Please choose another email." });
            }

            // If email doesn't exist, proceed with saving the new user
            const newUser = new User({name,email,password:CryptoJS.AES.encrypt(req.body.password, 'secret123').toString()});
            await newUser.save();
            return res.status(200).json({ success: "Account created successfully,redirecting to login page" });
        } catch (error) {
            console.error('Error during signup:', error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(400).json({ error: "Bad request" });
    }
}

export default connectDb(handler);
