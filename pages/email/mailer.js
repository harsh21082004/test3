import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import User from '@/models/user';

const email1 = process.env.EMAIL
const pass = process.env.EMAIL_PASS;

export const sendEmail = async ({ email, emailType, userId }) => {
    try {
        const hashedToken = await bcrypt.hash(userId.toString(), 10)

        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000,
            })
        } else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            })

        }
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: email1,
                pass,
            },
        });

        const mailOptions = {
            from: "harshtiwari.up2004@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN_URI}/verifyemail?token=${hashedToken}">here</a>to ${emailType === 'VERIFY' ? "Verify your email" : "Reset your password"} or copy and paste the url in browser </br> ${process.env.DOMAIN_URI}/verifyemail?token=${hashedToken}</p>`
        }

        const mailresponse = await transport.sendMail(mailOptions);
        return mailresponse;

    } catch (error) {
        throw new Error(error.message);
    }
} 