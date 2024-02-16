import { mdiViewDashboardOutline, mdiBasketOutline, mdiHistory, mdiPackageVariantClosed, mdiAccountOutline } from '@mdi/js';

export const sidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: mdiViewDashboardOutline
    },
    {
        title: "Order List",
        path: "/dashboard/order_list",
        icon: mdiBasketOutline
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
        title: "Profile",
        path: "/dashboard/profile",
        icon: mdiAccountOutline
    },
]