"use client"

import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeesCardList = () => {
    const [ employeesList, setEmployeesList ] = useState([]);

    const fetchApi = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            cache: "no-store"
        })
        const res = await response.json();
        setEmployeesList(res)
        console.time("Fetching Users Data")
        console.log("%cFetching Started...", "color: crimson; background: black; padding: 5px");
        console.table(res);
        console.log("%cFetching Done...", "color: teal; background: black; padding: 5px");
        console.timeEnd("Fetching Users Data")
    }
    
    useEffect(() => {
        fetchApi();
    }, [])
    
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