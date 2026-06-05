"use client";

import {
    Bell,
    Search,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AppHeader() {
    return (
        <header className="h-16 border-b bg-background flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
                <h1 className="font-semibold">
                    GK Electric ERP
                </h1>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                    <Input
                        placeholder="Search..."
                        className="pl-9 w-72"
                    />
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                >
                    <Bell className="h-4 w-4" />
                </Button>

                <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    JV
                </div>
            </div>
        </header>
    );
}