'use client'
import { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";
import { AppHeader } from "./app-header";

export function AppShell({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <AppSidebar />

            <div className="flex-1 flex flex-col">
                <AppHeader />
                <main className="flex-1 overflow-auto">
                    {children}
                </main>
            </div>

        </div>
    )
}