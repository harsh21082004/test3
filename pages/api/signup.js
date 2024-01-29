// Import necessary modules
import connectDb from "../../middleware/mongoose";
import User from "../../models/user";
import CryptoJS from 'crypto-js';
import sendEmail from "../email/mailer";

const handler = async (req, res) => {
    await connectDb();
    if (req.method === 'POST') {
        const { name, email, password } = req.body;

        try {
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(400).json({ error: "Email already exists. Please choose another email." });
            }

            // Hash the password securely using CryptoJS
            const hashedPassword = CryptoJS.SHA256(password).toString();

            const newUser = new User({
                name,
                email,
                password: hashedPassword,
            });

            await newUser.save();

            // Send email to user
            await sendEmail({ email:email, emailType: 'VERIFY', userId: newUser._id });

            return res.status(200).json({ success: "Account created successfully. Check your email for verification instructions." });
        } catch (error) {
            console.error('Error during signup:', error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(400).json({ error: "Bad request" });
    }
}

export default handler;
