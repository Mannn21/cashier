"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setEmployeesList,
	getEmployeesList,
} from "@/features/employee/employeeSlice";
import { getEmployees } from "@/services/employees";
import EmployeeCard from "./EmployeeCard";

const EmployeesCardList = () => {
	const dispatch = useDispatch();
	const employeesList = useSelector(getEmployeesList);

	useEffect(() => {
		const response = async () => {
			const employees = await getEmployees();
			dispatch(setEmployeesList(employees.message));
		};
		response();
	}, [dispatch]);


	return (
		<div className="w-full h-auto p-2">
			<div className="w-full h-auto grid grid-cols-4 gap-6">
				{employeesList.map(data => {
					return <EmployeeCard key={data.id} data={data} />;
				})}
			</div>
		</div>
	);
};

export default EmployeesCardList;
