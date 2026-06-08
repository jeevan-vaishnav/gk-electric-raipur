// lib/authOptions.ts
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { verifyPassword } from "./auth"
import { getDb } from "./mongodb"

export const authOptions: NextAuthOptions = {
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: { email: {}, password: {} },
            async authorize(credentials) {
                if (!credentials) return null
                const client = await getDb()
                const userCollection = client.collection("users")
                const user = await userCollection.findOne({ email: credentials.email })

                if (!user) throw new Error("No user found!")
                const isValid = await verifyPassword(credentials.password, user.password)
                if (!isValid) throw new Error("Could not log you in!")

                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.fullName,
                    role: user.role,
                    approved: user.approved,
                }
            },
        }),
    ],
    pages: { signIn: "/login" },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.role = user.role
                token.approved = user.approved
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.role = token.role as string
                session.user.approved = token.approved as boolean
            }
            return session
        }
    }
}