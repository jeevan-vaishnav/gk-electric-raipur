"use client";

import { Loader2 } from "lucide-react";

export function PageLoader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="text-sm text-muted-foreground">
                    Please wait...
                </p>
            </div>
        </div>
    );
}