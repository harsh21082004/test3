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
            // let response = await res.json();
            // console.log(response);
          }
          // let res = await fetch('http://localhost:3000/api/credential', {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',

          //   },
          //   body: JSON.stringify({ email }),

          // })
          // if (!res.ok) {
          //   throw new Error(`HTTP error! Status: ${res.status}`);
          // }
          // let response = await res.json();
          // console.log(response)
          // // localStorage.setItem('token', response.token)
          // else{
            
          // //   console.log(user)
          // //   return false;
          // }


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
