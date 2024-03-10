"use client"

import React from "react";
import {useDispatch} from "react-redux";
import { setEmployeesSort, getEmployeesSort } from "@/features/employee/employeeSlice";
import { Select } from "antd";
import { sortEmployeesData } from "@/data/sortEmployeesData";

const EmployeesDropdown = () => {
	const dispatch = useDispatch();
	
	const handleChange = value => {
		dispatch(setEmployeesSort(value))
	};

	return (
		<Select
			defaultValue="---Sortir Data---"
			className="w-[250px] h-[40px] text-center bg-color-transparent"
			onChange={handleChange}
			options={sortEmployeesData}
		/>
	);
};

export default EmployeesDropdown;
