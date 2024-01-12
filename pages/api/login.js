import connectDb from "../../middleware/mongoose";
import User from "../../models/user";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            let user = await User.findOne({ email: req.body.email });

            if (!user) {
                // No user found with the given email
                return res.status(400).json({ error: "Invalid Credentials" });
            }

            const bytes = CryptoJS.AES.decrypt(user.password, 'secret123');

            let userPassword = bytes.toString(CryptoJS.enc.Utf8);

            // User with the given email found, check the password
            if (req.body.email === user.email && userPassword === req.body.password) {
                var token = jwt.sign({ email:user.email,name:user.name }, 'jwtsecret',{ expiresIn: 30 });
                return res.status(200).json({ token,success: "Successfully logged in, redirecting to homepage" });
            } else {
                // Password is invalid
                return res.status(400).json({ error: "Invalid Password" });
            }
        } catch (error) {
            console.error('Error during login:', error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(400).json({ error: "Bad request" });
    }
}

export default connectDb(handler);
