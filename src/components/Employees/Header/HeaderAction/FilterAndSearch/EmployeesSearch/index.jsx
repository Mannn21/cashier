"use client";

import { useDispatch, useSelector } from "react-redux";
import {
	setEmployeesKeyword,
	getEmployeesKeyword,
} from "@/features/employee/employeeSlice";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const EmployeesSearch = () => {
	const dispatch = useDispatch();
	const keyword = useSelector(getEmployeesKeyword);

	const handleKeyword = e => {
		dispatch(setEmployeesKeyword(e.target.value));
	};

	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto flex flex-row justify-start items-center">
				<div className="w-full flex flex-row p-1 gap-1 rounded-md border border-color-tersier3 focus-within:border-color-secondary1 hover:border-color-secondary1hover">
					<div className="p-1">
						<Icon path={mdiMagnify} size={1} />
					</div>
					<input
						type="text"
						onChange={e => handleKeyword(e)}
						placeholder="Cari Pegawai...."
						className="w-full p-1 outline-none border-none text-base text-color-tersier3 tracking-wide bg-color-transparent"
					/>
				</div>
			</div>
		</div>
	);
};

export default EmployeesSearch;
