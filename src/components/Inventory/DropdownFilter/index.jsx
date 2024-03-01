"use client";

import { useState } from "react";
import Icon from "@mdi/react";
import { mdiTuneVerticalVariant, mdiWindowClose } from "@mdi/js";
import Dropdown from "./Dropdown";

const DropdownFilter = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const handleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return (
		<div>
			<div>
				{!isFilterOpen ? (
					<button
						type="button"
						onClick={handleFilter}
						className="flex flex-row justify-start items-center gap-1 p-2 rounded-md bg-color-secondary1 text-color-primer font-semibold tracking-wide hover:bg-color-secondary1hover ease-in-out duration-300 transition-all">
						Filter Data
						<Icon path={mdiTuneVerticalVariant} size={1} />
					</button>
				) : (
					<div className="absolute z-10">
						<div
							className="w-auto h-auto cursor-pointer p-2 rounded-full text-color-primer bg-color-accent hover:bg-color-accentHover absolute -top-4 -right-9 ease-in-out duration-300 transition-all"
							onClick={handleFilter}>
							<Icon path={mdiWindowClose} size={0.7} />
						</div>
						<Dropdown />
					</div>
				)}
			</div>
		</div>
	);
};

export default DropdownFilter;
