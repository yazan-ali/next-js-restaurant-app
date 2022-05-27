import NextAuth from 'next-auth/next';
import CredentialsProvider from "next-auth/providers/credentials";
import DB_Connect from "../../../db-connect";
import User from "../../../models/userModel"
import bcrypt from 'bcrypt'

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                await DB_Connect();
                const user = await User.findOne({ username: credentials.username });
                if (user) {
                    const match = await bcrypt.compare(credentials.password, user.password);
                    if (!match) {
                        throw new Error("Username or password is incorrect")
                    } else {
                        return user;
                    }
                } else {
                    throw new Error("User not found")
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: "dcsfodlsaasqsopxfjieoepdplfk"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                const { _id, email, username, isAdmin } = user;
                token.user = { _id, email, username, isAdmin }
            }
            return token
        },
        async session({ session, token }) {
            session.user = token.user
            return session
        }
    },
    pages: {
        signIn: '/login',
        signOut: '/',
    }
})