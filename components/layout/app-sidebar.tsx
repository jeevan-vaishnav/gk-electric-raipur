"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSidebarStore } from "@/stores/sidebar.store";
import { cn } from "@/lib/utils";
import { NAVIGATION } from "./navigation";

export function AppSidebar() {
    const pathname = usePathname();

    const { collapsed, toggle } =
        useSidebarStore();

    const [openMenus, setOpenMenus] =
        useState<Record<string, boolean>>({
            Masters: true,
            Parts: true,
        });

    return (
        <motion.aside
            animate={{
                width: collapsed ? 70 : 260,
            }}
            className="border-r bg-background h-screen sticky top-0"
        >
            <div className="h-16 border-b flex items-center px-4">
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        GK
                    </div>

                    {!collapsed && (
                        <div>
                            <h2 className="font-semibold">
                                GK Electric
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                ERP
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <nav className="p-2 space-y-1">
                {NAVIGATION.map((item) => {
                    if ("href" in item) {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href!}
                                className={cn(
                                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent",
                                    pathname === item.href &&
                                    "bg-accent"
                                )}
                            >
                                <Icon className="h-4 w-4" />

                                {!collapsed && (
                                    <span>{item.title}</span>
                                )}
                            </Link>
                        );
                    }

                    const Icon = item.icon;

                    return (
                        <div key={item.title}>
                            <button
                                className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent"
                                onClick={() =>
                                    setOpenMenus((prev) => ({
                                        ...prev,
                                        [item.title]:
                                            !prev[item.title],
                                    }))
                                }
                            >
                                <Icon className="h-4 w-4" />

                                {!collapsed && (
                                    <>
                                        <span className="flex-1 text-left">
                                            {item.title}
                                        </span>

                                        <ChevronDown
                                            className={cn(
                                                "h-4 w-4 transition",
                                                openMenus[item.title] &&
                                                "rotate-180"
                                            )}
                                        />
                                    </>
                                )}
                            </button>

                            {!collapsed &&
                                openMenus[item.title] && (
                                    <div className="ml-5 mt-1 space-y-1 border-l pl-3">
                                        {item.children.map(
                                            (child) => {
                                                const ChildIcon =
                                                    child.icon;

                                                return (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={cn(
                                                            "flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-accent",
                                                            pathname ===
                                                            child.href &&
                                                            "bg-accent"
                                                        )}
                                                    >
                                                        <ChildIcon className="h-4 w-4" />

                                                        {child.title}
                                                    </Link>
                                                );
                                            }
                                        )}
                                    </div>
                                )}
                        </div>
                    );
                })}
            </nav>

            <div className="absolute bottom-3 left-0 right-0 px-2">
                <button
                    onClick={toggle}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent"
                >
                    <ChevronLeft
                        className={cn(
                            "h-4 w-4 transition",
                            collapsed &&
                            "rotate-180"
                        )}
                    />

                    {!collapsed && (
                        <span>Collapse</span>
                    )}
                </button>
            </div>
        </motion.aside>
    );
}