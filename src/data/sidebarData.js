import { mdiViewDashboardOutline, mdiBasketOutline, mdiHistory, mdiPackageVariantClosed, mdiTableFurniture, mdiAccountOutline, mdiRoomServiceOutline } from '@mdi/js';

export const sidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: mdiViewDashboardOutline
    },
    {
        title: "Profile",
        path: "/dashboard/profile",
        icon: mdiAccountOutline
    },
    {
        title: "Order List",
        path: "/dashboard/order_list",
        icon: mdiBasketOutline
    },
    {
        title: "Servings",
        path: "/dashboard/servings",
        icon: mdiRoomServiceOutline
    },
    {
        title: "History",
        path: "/dashboard/history",
        icon: mdiHistory
    },
    {
        title: "Inventory",
        path: "/dashboard/inventory",
        icon: mdiPackageVariantClosed
    },
    {
        title: "Tables",
        path: "/dashboard/tables",
        icon: mdiTableFurniture
    },
]