// Import necessary modules
import connectDb from "../../middleware/mongoose";
import User from "../../models/user";

connectDb();

export default async function handler(req, res) {
    try {
        const { token } = req.body;

        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ error: "Invalid or expired token" });
        }

        user.isVerified = true;
        // user.verifyToken = undefined;
        // user.verifyTokenExpiry = undefined;

        await user.save();

        return res.status(200).json({
            message: "Email verified successfully",
            success: true,
            isVerified: user.isVerified
        });
    } catch (error) {
        console.error('Error during email verification:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
