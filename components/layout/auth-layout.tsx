'use client'
// components/auth/auth-layout.tsx
import { motion } from "framer-motion";
import hero from "@/assets/image.png";
import Image from "next/image";
import Logo from "@/assets/logo.jpg"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Panel */}
            <div className="relative lg:w-1/2 min-h-[280px] lg:min-h-screen flex flex-col justify-between overflow-hidden">
                <Image
                    src={hero}
                    alt="Hero"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

                <div className="relative z-10 p-8">
                    <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-full  border-2 border-white/0 flex items-center justify-center">
                            <Image
                                src={Logo}
                                alt="napdol"
                                width={100}
                                height={100}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                quality={100}
                                className="h-14 md:h-20 lg:h-24 w-auto md:h-24 object-contain"
                                priority />
                        </div>
                        <span className="text-white font-bold text-lg tracking-widest">
                            GK Electric
                        </span>
                        <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white">
                            v1.0
                        </span>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 p-8 lg:p-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-3">
                        Automation Machinery Manufacturing
                    </h2>
                    <p className="max-w-md text-white/80 text-sm leading-relaxed">
                        Manage parts, suppliers, variants, versions, and manufacturing
                        operations from a centralized platform.
                    </p>
                    {/* <div className="mt-8 space-y-3">
                        <div className="text-white/90 text-sm">
                            ✓ Part Number Management
                        </div>

                        <div className="text-white/90 text-sm">
                            ✓ Supplier & Vendor Tracking
                        </div>

                        <div className="text-white/90 text-sm">
                            ✓ Manufacturing Masters
                        </div>

                        <div className="text-white/90 text-sm">
                            ✓ ERP Dashboard & Reports
                        </div>
                    </div> */}
                </motion.div>
            </div>
            {/* Right Panel */}
            <div className="lg:w-1/2 flex flex-col items-center justify-center bg-background px-6 py-4">
                <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm">
                    {children}
                </div>
                <div className="flex flex-col items-center">
                    <p className="mt-8 text-center text-xs text-muted-foreground">
                        © {new Date().getFullYear()} GK Electric Raipur. All rights reserved.
                    </p>
                    <p className="mt-1 text-center text-xs text-muted-foreground/70">
                        Built & Maintained by Jeevan Vaishnav
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AuthLayout;