import { hash, compare } from 'bcryptjs'
import { getServerSession } from "next-auth/next";
import { authOptions } from './authOptions';

export async function hashPassword(password: string) {
    const hashedPassword = await hash(password, 12)
    return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: string) {
    const isValid = await compare(password, hashedPassword)
    return isValid
}

export async function getSession() {
    return await getServerSession(authOptions);
}