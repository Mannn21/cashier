"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from '@mdi/react';
import { mdiBell } from '@mdi/js';
import { formattedCurrentDate } from "@/utils/formattedCurrentDate";

const Navbar = () => {
	const pathname = usePathname();
	const date = formattedCurrentDate()

	const [lastPathSegment, setLastPathSegment] = useState("");

	useEffect(() => {
		const segment = pathname.substring(pathname.lastIndexOf("/") + 1);
		const capitalizedSegment =
			segment.charAt(0).toUpperCase() + segment.slice(1);
		setLastPathSegment(capitalizedSegment);
	}, [pathname]);

	return (
		<header className="w-full h-auto">
			<div className="w-full p-2 flex flex-row justify-between items-center">
				<div className="w-1/2 flex justify-start items-center">
					<h1 className="text-2xl font-black tracking-wide text-color-dark">
						{lastPathSegment}
					</h1>
				</div>
				<div className="w-1/2 flex justify-end items-center gap-4">
					<span className="text-xl font-semibold tracking wide text-color-tersier3">
						<date>{date}</date>
					</span>
					<Link
						href={`/dashboard/user/profile`}
						className="cursor-pointer hover:rotate-6 hover:scale-105 transition-all ease-in-out duration-200">
						<Icon path={mdiBell} size={1.2} color="#4169E1" />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;