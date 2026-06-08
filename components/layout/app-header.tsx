"use client";

import { Bell, ChevronDown, LogOut, Search, SettingsIcon, UserCircle, } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTE_LABELS } from "./route-labels";
import { navigate } from "next/dist/client/components/segment-cache/navigation";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "./ThemeToggle/theme-toggle";

// import { useAuth } from "@/lib/auth-context";


export function AppHeader() {
    const pathname = usePathname();

    // const { user, signOut } = useAuth();
    // const handleSignOut = async () => {
    //     await signOut
    // }
    const user = { email: "" }
    const initials = (user?.email ?? "G").slice(0, 2).toUpperCase();
    const segments = pathname.split("/").filter(Boolean);

    return (
        <header className="h-16 border-b bg-card/95 supports-[backdrop-filter]:bg-card/80 sticky top-0 z-30 flex items-center justify-between px-4 md:px-6 gap-4">
            <div className="flex items-center gap-4">
                <Breadcrumb className="hidden sm:block">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/dashboard">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {segments.map((seg, i) => {
                            const isLast = i === segments.length - 1;
                            const label = ROUTE_LABELS[seg] ?? seg.replace(/-/g, " ");
                            return (
                                <span key={i} className="flex items-center gap-1.5">
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        {isLast ? (
                                            <BreadcrumbPage className="capitalize">{label}</BreadcrumbPage>
                                        ) : (
                                            <span className="capitalize text-muted-foreground">{label}</span>
                                        )}
                                    </BreadcrumbItem>
                                </span>
                            );
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
                <div className="relative hidden md:block w-72">
                    <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search parts, masters..." className="pl-9 w-72" />
                </div>

                <Button variant="ghost" size="icon" className="relative hidden" >
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                </Button>
                  <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-md hover:bg-accent transition-colors">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-primary text-primary-foreground text-xs">{initials}</AvatarFallback>
                            </Avatar>
                            <div className="text-left hidden sm:block">
                                {/* <div className="text-xs font-medium leading-tight">
                                    {user?.user_metadata?.name ?? user?.email?.split("@")[0]}
                                </div> */}
                                <div className="text-[10px] text-muted-foreground">Administrator</div>
                            </div>
                            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground hidden sm:block" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>
                            <div className="font-medium text-sm">{user?.email}</div>
                            <div className="text-xs text-muted-foreground font-normal mt-0.5">GK E-Vehicle Industries</div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                        // onClick={() => navigate({ to: "/users" })}
                        >
                            <UserCircle className="h-4 w-4 mr-2" /> Team
                        </DropdownMenuItem>
                        <DropdownMenuItem
                        // onClick={() => navigate({ to: "/settings" })}
                        >
                            <SettingsIcon className="h-4 w-4 mr-2" /> Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            // onClick={handleSignOut} 
                            className="text-destructive focus:text-destructive">
                            <LogOut className="h-4 w-4 mr-2" /> Sign out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}