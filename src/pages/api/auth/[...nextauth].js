// import NextAuth from "next-auth/next";
// import Providers from 'next-auth/providers';
// import dbConnect from "../../../lib/dbConnect";
// import { User } from "../../../models/User";

// export default NextAuth({
//     providers: [
//         Providers.Credentials({
//             async authorize(credentials) {
//                 dbConnect();
//                 const user = await User.findOne({
//                     email: credentials.email,
//                     password: credentials.password,
//                 });
//                 if (user) {
//                     return user;
//                 } else {
//                     return null;
//                 }
//             }
//         })
//     ],
//     session: {
//         jwt: true,
//         maxAge: 30 * 24 * 60 * 60,
//     },
//     jwt: {
//         secret: process.env.JWT_SECRET,
//     },
// });
