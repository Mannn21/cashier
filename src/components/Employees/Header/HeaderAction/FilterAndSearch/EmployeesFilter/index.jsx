"use client";

import { useState } from "react";
import Icon from "@mdi/react";
import { mdiFilterVariant, mdiWindowClose } from "@mdi/js";
import EmployeesDropdown from "./EmployeesDropdown";

const EmployeesFilter = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const handleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto p-2">
				<EmployeesDropdown handleFilter={handleFilter} />
			</div>
		</div>
	);
};

export default EmployeesFilter;
