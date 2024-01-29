import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import connectDb from '../../../middleware/mongoose'
import User from '../../../models/user';


const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      if (sessionUser) {
        session.user.id = sessionUser._id;
        session.user.name = sessionUser.name;
        session.user.image = sessionUser.image;
      }
      return session;
    },
    async signIn({ user, account }) {

      if (account.provider === 'google' || account.provider === 'github') {
        const { name, email, image } = user;
        try {
          await connectDb();
          const userExist = await User.findOne({ email });
          if (!userExist) {
            let res = await fetch('http://localhost:3000/api/googlecredential', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email, image }),
            })
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return user;
          }
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      }
      return true;
    },
  },
};

export default NextAuth(authOptions);
