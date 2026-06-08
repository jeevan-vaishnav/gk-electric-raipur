import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function proxy(req: NextRequest) {
    const token = await getToken({ req })
    const { pathname } = req.nextUrl

    // public auth routes
    if (pathname.startsWith("/api/auth")) {
        return NextResponse.next();
    }

    if (pathname.startsWith("/api")) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url))
        }

        if (!token.approved) {
            return NextResponse.redirect(new URL("/not-authorized", req.url))
        }
    }

    if (
        pathname.startsWith("/login") ||
        pathname.startsWith("/register")
    ) {
        if (token) {
            if (!token.approved) {
                return NextResponse.redirect(
                    new URL("/not-authorized", req.url)
                )
            }
            return NextResponse.redirect(new URL("/dashboard", req.url))
        }
    }

    if (pathname.startsWith("/not-authorized")) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url))
        }

        if (token.approved) {
            return NextResponse.redirect(new URL("/dashboard", req.url))
        }
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*", "/login", "/register", "/not-authorized", "/api/:path*"],
}