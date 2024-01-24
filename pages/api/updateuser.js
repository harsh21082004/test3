// Import necessary modules
import connectDb from "../../middleware/mongoose";
import User from "../../models/user";
import jwt from 'jsonwebtoken';

connectDb(handler);

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        try {
            // Find the user by email
            let user = await User.findOne({ email: req.body.email});
            

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            // Update user information
            user.name = req.body.name;
            user.email = req.body.email;
            user.image = req.body.image;

            // Save the updated user
            await user.save();
            // await user1.save();

            // Generate a new token with updated information
            const token = jwt.sign({ email: user.email, name: user.name,image:user.image }, 'jwtsecret1', { expiresIn: '3h' });

            // Log the updated token
            console.log(token);

            // Send the new token in the response
            return res.status(200).json({ token, success: "User information updated successfully" });
        } catch (error) {
            console.error('Error during user update:', error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(400).json({ error: "Bad request" });
    }
}
