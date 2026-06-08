import { hashPassword } from "@/lib/auth";
import { getDb } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const body = await req.json();
    const { fullName, email, password, role, authorized } = body
    if (!email || !email.includes('@') || !password || password.trim().length < 6 || !fullName || !role || authorized !== true) {
        return NextResponse.json(
            { message: "Invalid Input - Password should also be at least 7 characters long." },
            { status: 422 }
        )
    }
    const client = await getDb()
    
    const existingUser = await client.collection("users").findOne({ email });

    if (existingUser) {
        // client.close()
        return NextResponse.json(
            { message: "User already exists." },
            { status: 422 }
        );
    }
    const hashedPassword = await hashPassword(password);
    await client.collection("users").insertOne({
        fullName: fullName,
        email: email,
        password: hashedPassword,
        role: role,
        authorized: authorized,
        approved: false,
        createdAt: new Date(),
    });

    return NextResponse.json({ message: "User created sucessfully" }, { status: 201 })
}
