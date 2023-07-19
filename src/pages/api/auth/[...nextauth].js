import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import dbConnect from "../../../lib/dbConnect";

export default NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                await dbConnect();

                const { email, password } = credentials;
                const user = await User.findOne({ email });
                if (!user || !user.password) {
                    throw new Error("Invalid credentials");
                }

                const isPasswordMatched = await bcrypt.compare(
                    password,
                    user.password
                );

                if (!isPasswordMatched) {
                    throw new Error("Invalid credentials");
                }
                return user;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    secret: "secret",
});
