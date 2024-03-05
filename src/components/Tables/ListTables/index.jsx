"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardTable from "../CardTable";
import {
    setTableDatas,
    getAllTables,
    getFilterCategory,
    getStatusTable
} from "@/features/table/tableSlice";
import { getTables } from "@/services/tables";
import { sortDatas } from "@/utils/sortDatas";

const ListTables = () => {
    const dispatch = useDispatch();
    const category = useSelector(getFilterCategory);
    const status = useSelector(getStatusTable);
    const tables = useSelector(getAllTables);

    
    useEffect(() => {
        const fetchData = async () => {
            const response = await getTables();
            const sortedTables = sortDatas(response.message);
            dispatch(setTableDatas(sortedTables));
        };
        fetchData();
    }, [dispatch]);
    
    const filteredDatas = useMemo(() => {
        if (typeof tables === "string") {
            return [];
        }
        return tables?.filter(data => {
            const isCategoryMatch = category.toLowerCase() === "semua meja" || category.toLowerCase() === data.category.toLowerCase();
            const isStatusMatch = status.toLowerCase() === "semua" || status === data.status.toString();
            return isCategoryMatch && isStatusMatch;
        });
    }, [tables, category, status]);

    return (
        <div className="w-full h-auto py-2">
            <div className="grid grid-cols-4 gap-x-8 gap-y-10">
                {filteredDatas?.map(data => (
                    <div key={data.id}>
                        <CardTable data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListTables;
