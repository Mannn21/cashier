"use client"

import { useDispatch, useSelector } from "react-redux"
import Icon from "@mdi/react";
import { navbarData } from "@/data/navbarData";
import { setFilterCategory, getFilterCategory } from "@/features/filter/filterSlice"

const Navbar = () => {
	const dispatch = useDispatch()
	const category = useSelector(getFilterCategory)

	const handleCategory = data => {
		dispatch(setFilterCategory(data))
	}
	
	return (
		<div className="w-full">
			<div className="w-full h-auto flex flex-row justify-around items-center">
				{navbarData.map((data, index) => {
					return (
						<div
							key={index}
							className={`px-3 py-1 flex flex-row justify-center items-center gap-1 cursor-pointer rounded-full hover:text-color-primer hover:bg-color-secondary1 ease-in-out duration-300 transition-all ${category === data.category ? "text-color-primer bg-color-secondary1" : "text-color-tersier3"}`}
							onClick={() => handleCategory(data.category)}
							>
							<div>
								<Icon path={data.icon} size={0.95} />
							</div>
							<span className="text-base font-semibold tracking-wide">{data.title}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
