import NextAuth, { DefaultSession } from "next-auth"

// Extend default session user
declare module "next-auth" {
    interface Session {
        user: {
            id: string
            role?: string
            approved?: boolean
        } & DefaultSession["user"]
    }

    interface User {
        id: string
        role?: string
        approved?: boolean
    }
}