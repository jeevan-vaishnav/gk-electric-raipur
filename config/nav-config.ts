import { NavGroup } from "@/types";

export const navGroups: NavGroup[] = [
  {
    label: "Overview",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: "dashboard",
        shortcut: ["d", "d"],
        isActive: false,
        items: [],
      },
    ],
  },

  {
    label: "Masters",
    items: [
      {
        title: "Masters",
        url: "#",
        icon: "database",
        isActive: true,
        items: [
          {
            title: "Part Types",
            url: "/dashboard/masters/part-types",
            icon: "shapes",
          },
          {
            title: "System Groups",
            url: "/dashboard/masters/system-groups",
            icon: "layers",
          },
          {
            title: "Functions",
            url: "/dashboard/masters/functions",
            icon: "wrench",
          },
          {
            title: "Suppliers",
            url: "/dashboard/masters/suppliers",
            icon: "factory",
          },
          {
            title: "Versions",
            url: "/dashboard/masters/versions",
            icon: "gitBranch",
          },
          {
            title: "Variants",
            url: "/dashboard/masters/variants",
            icon: "tag",
          },
        ],
      },
    ],
  },

  {
    label: "Parts",
    items: [
      {
        title: "Parts",
        url: "/dashboard/parts",
        icon: "boxes",
        shortcut: ["p", "p"],
        isActive: false,
        items: [],
      },
    ],
  },

  {
    label: "Reports",
    items: [
      {
        title: "Reports",
        url: "/dashboard/reports",
        icon: "reports",
        shortcut: ["r", "r"],
        isActive: false,
        items: [],
      },
    ],
  },

  {
    label: "Settings",
    items: [
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: "settings",
        shortcut: ["s", "s"],
        isActive: false,
        items: [],
      },
    ],
  },
];