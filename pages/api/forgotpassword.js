// Import necessary modules
import connectDb from "../../middleware/mongoose";
import User from "../../models/user";
import CryptoJS from "crypto-js";

connectDb();

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        try {
            const { newPassword, confirmNewPassword } = req.body;

            // Find the user by email
            const user = await User.findOne({ email: req.body.email });

            if(!user){
                return res.status(404).json({ error: "User not found" });
            }

            if (newPassword === confirmNewPassword) {
                // Hash the new password using CryptoJS
                const hashedPassword = CryptoJS.SHA256(newPassword).toString();

                // Update user's password
                user.password = hashedPassword;

                // Save the updated user
                await user.save();

                // Send the new token in the response
                return res.status(200).json({ success: "Password changed successfully" });
            } else {
                return res.status(400).json({ error: "New password and confirmation do not match" });
            }
        } catch (error) {
            console.error('Error during password change:', error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(400).json({ error: "Bad request" });
    }
}
