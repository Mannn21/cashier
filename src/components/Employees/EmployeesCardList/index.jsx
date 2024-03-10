"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setEmployeesList,
	getEmployeesList,
	getEmployeesKeyword,
	getEmployeesSort
} from "@/features/employee/employeeSlice";
import { getEmployees } from "@/services/employees";
import EmployeeCard from "./EmployeeCard";
import { sortedAndSearchEmployeesData } from "@/utils/sortedAndSearchEmployeesData";

const EmployeesCardList = () => {
	const dispatch = useDispatch();
	const employeesList = useSelector(getEmployeesList);
	const keyword = useSelector(getEmployeesKeyword);
	const sort = useSelector(getEmployeesSort)

	useEffect(() => {
		const response = async () => {
			const employees = await getEmployees();
			dispatch(setEmployeesList(employees.message));
		};
		response();
	}, [dispatch]);

	const sortedAndFilteredEmployeesData = useMemo(() => {
		const sortedAndFilterData = sortedAndSearchEmployeesData(employeesList, keyword, sort);
		return sortedAndFilterData;
	}, [employeesList, keyword, sort]);


	return (
		<div className="w-full h-auto p-2">
			<div className="w-full h-auto grid grid-cols-4 gap-6">
				{sortedAndFilteredEmployeesData?.map(data => {
					return <EmployeeCard key={data.id} data={data} />;
				})}
			</div>
		</div>
	);
};

export default EmployeesCardList;
