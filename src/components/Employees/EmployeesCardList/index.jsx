"use client"

import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { setEmployeesList, getEmployeesList } from "@/features/employee/employeeSlice";
import { getEmployees } from "@/services/employees";
import EmployeeCard from "./EmployeeCard";

const EmployeesCardList = () => {
    const dispatch = useDispatch();
    const employeesList = useSelector(getEmployeesList);
    
    useEffect(() => {
        const response = async () => { 
            const employees = await getEmployees();
            console.log("%cFetching Started....", "color: crimson; background: black; padding: 10px;");
            console.time("Fetching Employees Data")
            console.table(employees.message)
            dispatch(setEmployeesList(employees.message)) 
            console.timeEnd("Fetching Employees Data")
            console.log("%cFetching Done....", "color: teal; background: black; padding: 10px;");
        }
        response();
    }, [dispatch])
    
    return (
        <div className="w-full h-auto p-2">
            <div className="w-full h-auto grid grid-cols-4 gap-6">
                {
                    employeesList?.map(data => {
                        return (
                            <EmployeeCard key={data.id} data={data} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EmployeesCardList;