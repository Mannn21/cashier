"use client";

import { useState } from "react";
import Icon from "@mdi/react";
import { mdiFilterVariant } from "@mdi/js";
import EmployeesDropdown from "./EmployeesDropdown";

const EmployeesFilter = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const handleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto p-2">
				{!isFilterOpen ? (
					<button
						onClick={handleFilter}
						type="button"
						className="w-auto h-auto p-2 flex flex-row justify-center items-center gap-2 border border-color-tersier3 rounded-md text-color-dark hover:border-color-secondary1hover hover:bg-color-secondary1hover hover:text-color-primer transition-all ease-in-out duration-300">
						<Icon path={mdiFilterVariant} size={1} />
						Filter
					</button>
				) : (
					<EmployeesDropdown />
				)}
			</div>
		</div>
	);
};

export default EmployeesFilter;
