'use client'
import { Button } from "@/components/ui/button";
import { LogOut, Clock, Mail, Phone, ArrowLeft } from "lucide-react";
// import shieldLockImg from "@/assets/shield-lock.png";
// import { usePathname } from "next/navigation";
import { signOut } from 'next-auth/react';

const NotAuthorized = () => {
    return (
        <div className="bg-background flex flex-col">
            {/* Top Bar */}
            <header className="w-full bg-navy-gradient px-6 py-4 flex items-center justify-end">
                <Button
                    onClick={() =>
                        signOut({ callbackUrl: '/login' })
                    }
                    variant="outline"
                    className="cursor-pointer flex items-center gap-2 rounded-lg border border-secondary bg-secondary px-4 py-2 text-sm font-medium text-gold transition-all hover:bg-secondary/50 hover:border-secondary"
                >
                    <LogOut className="h-4 w-4" />
                    Logout
                </Button>
            </header>

            {/* Main Content */}
            <main className="flex flex-1 items-center justify-center px-4 py-6">
                <div className="w-full max-w-2xl">
                    <div className="rounded-2xl border border-border bg-card p-4 shadow-xl sm:p-6 text-center">
                        {/* Shield Image */}
                        <div className="hidden mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                            {/* <img
                                src={shieldLockImg}
                                alt="Access restricted shield"
                                className="h-full w-full object-contain drop-shadow-lg"
                            /> */}
                        </div>

                        {/* Title */}
                        <h1 className="font-heading text-3xl font-bold text-foreground">
                            Access <span className="text-gradient-gold">Not Authorized</span>
                        </h1>

                        {/* Message */}
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-base hidden">
                            You are not authorized to access the{" "}
                            <span className="font-semibold text-foreground">
                                GKE Admin Dashboard
                            </span>
                            . Your account is currently pending approval from the administration.
                        </p>
                        {/* Status Card */}
                        <div className="mx-auto mt-8 max-w-md rounded-xl border border-gold/20 bg-gold/5 p-5">
                            <div className="flex items-center justify-center gap-2 text-gold">
                                <Clock className="h-5 w-5 animate-pulse-slow" />
                                <span className="font-heading text-sm font-bold uppercase tracking-wider">
                                    Approval Pending
                                </span>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Please wait while the administration reviews your access request.
                                You will be notified once your account has been approved.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="my-8 flex items-center gap-4">
                            <div className="h-px flex-1 bg-border" />
                            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                Need Help?
                            </span>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        {/* Contact Info */}
                        <p className="text-sm text-muted-foreground">
                            If you believe this is an error, please contact the authorized
                            department:
                        </p>

                        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
                            <a
                                href="mailto:support@gkelectric.in"
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-navy-light transition-colors hover:bg-muted"
                            >
                                <Mail className="h-4 w-4 text-gold" />
                                support@gkelectric.in
                            </a>
                            <a
                                href="tel:+231770000000"
                                className=" hidden flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-navy-light transition-colors hover:bg-muted"
                            >
                                <Phone className="h-4 w-4 text-gold" />
                                +231 77 000 0000
                            </a>
                        </div>

                        {/* Back / Logout Button */}
                        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                            <button
                                onClick={() => {
                                    signOut({ callbackUrl: "/login" })
                                }}
                                className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Login
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div >
    );
};

export default NotAuthorized;