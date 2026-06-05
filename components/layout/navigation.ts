import {
    LayoutDashboard, PlusSquare, Boxes, FileBarChart, Settings as SettingsIcon,
    Database, LogOut, Search, ChevronLeft, ChevronRight, ChevronDown,
    Layers, Wrench, Factory, GitBranch, Shapes, Tag, Bell, UserCircle, ChevronsRight,
} from "lucide-react";


export const NAVIGATION = [
    { href: "/dashboard", title: "Dashboard", icon: LayoutDashboard },
    {
        title: "Masters",
        icon: Database,
        children: [
            { href: "/masters/part-types", title: "Part Types", icon: Shapes },
            { href: "/masters/system-groups", title: "System Groups", icon: Layers },
            { href: "/masters/functions", title: "Functions", icon: Wrench },
            { href: "/masters/suppliers", title: "Suppliers", icon: Factory },
            { href: "/masters/versions", title: "Versions", icon: GitBranch },
            { href: "/masters/variants", title: "Variants", icon: Tag },
        ],
    },
    {
        title: "Parts",
        icon: Boxes,
        children: [
            { href: "/parts/new", title: "Create Part", icon: PlusSquare },
            { href: "/parts", title: "Part List", icon: Boxes },
        ],
    },
    { href: "/reports", title: "Reports", icon: FileBarChart },
    { href: "/settings", title: "Settings", icon: SettingsIcon },
];