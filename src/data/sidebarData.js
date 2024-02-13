import { mdiViewDashboard, mdiBasket, mdiHistory, mdiPackageVariantClosed, mdiAccountTie } from '@mdi/js';

export const sidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: mdiViewDashboard
    },
    {
        title: "Order List",
        path: "/dashboard/order_list",
        icon: mdiBasket
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
        icon: mdiAccountTie
    },
]