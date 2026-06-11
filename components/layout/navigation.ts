import {
    LayoutDashboard, PlusSquare, Boxes, FileBarChart, Settings as SettingsIcon,
    Database, LogOut, Search, ChevronLeft, ChevronRight, ChevronDown,
    Layers, Wrench, Factory, GitBranch, Shapes, Tag, Bell, UserCircle, ChevronsRight,
} from "lucide-react";


export const NAVIGATION = [
    { href: "/dashboard", title: "Overview", icon: LayoutDashboard },
    {
        title: "Masters",
        icon: Database,
        children: [
            { href: "/dashboard/masters/part-types", title: "Part Types", icon: Shapes },
            { href: "/dashboard/masters/system-groups", title: "System Groups", icon: Layers },
            { href: "/dashboard/masters/functions", title: "Functions", icon: Wrench },
            { href: "/dashboard/masters/suppliers", title: "Suppliers", icon: Factory },
            { href: "/dashboard/masters/versions", title: "Versions", icon: GitBranch },
            { href: "/dashboard/masters/variants", title: "Variants", icon: Tag },
        ],
    },
    {
        title: "Parts",
        icon: Boxes,
        href:"/dashboard/parts"
        // children: [
        //     { href: "/dashboard/parts", title: "Create Part", icon: PlusSquare },
        // ],
    },
    { href: "/dashboard/reports", title: "Reports", icon: FileBarChart },
    { href: "/dashboard/settings", title: "Settings", icon: SettingsIcon },
];