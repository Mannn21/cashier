"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import ListNavigation from "./ListNavigation"
import { mdiAccountTieOutline } from '@mdi/js';
import { sidebarData } from "@/data/sidebarData";

const Sidebar = () => {
    const pathname = usePathname()
    const dataEmployees = {
        title: "Employees",
        icon: mdiAccountTieOutline
    }
    return (
        <div className="w-auto h-screen p-3 bg-red-400">
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
                    {
                        sidebarData.map((data, index) => {
                            return (
                                <Link key={index} href={data.path}>
									<ListNavigation data={data} pathname={pathname}/>
								</Link>
                            )
                        })
                    }
                    {
                        <Link href={"/dashboard/employees"}>
                            <ListNavigation data={dataEmployees} pathname={pathname}  />
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default Sidebar;