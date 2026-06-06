'use client'
import { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";
import { AppHeader } from "./app-header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function AppShell({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
                <AppHeader />
                <main className="flex-1 overflow-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>

        </div>
    )
}