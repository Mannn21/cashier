"use client";

import React, { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "@/services/history";
import {
	addHistory,
	getAllHistory,
	getDate,
	getKeyword,
} from "@/features/history/historySlice";
import { formattedDateTime } from "@/utils/formattedDateTime";
import { groupedHistoryDataByDate } from "@/utils/groupedHistoryDataByDate";
import { historySearched } from "@/utils/historySearched";

const TableHistoryList = () => {
	const dispatch = useDispatch();
	const history = useSelector(getAllHistory);
	const keyword = useSelector(getKeyword);
	const date = useSelector(getDate);

	const fetchData = useCallback(async () => {
		const response = await getHistory();
		const data = response.message;
		dispatch(addHistory(data));
	}, [dispatch]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const searchedData = useMemo(() => {
		const searchData = historySearched(history, keyword, date);
		return searchData;
	}, [keyword, history, date]);

	const groupedDataByDate = useMemo(() => {
		const groupedData = groupedHistoryDataByDate(searchedData);
		return groupedData;
	}, [searchedData]);

	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto border border-color-tersier2 rounded-t-xl overflow-hidden">
				<table className="w-full h-auto">
					{Object.entries(groupedDataByDate).map(([date, data]) => (
						<React.Fragment key={date}>
							<thead>
								<tr>
									<th
										colSpan="9"
										className="w-full h-auto px-2 py-3 bg-color-secondary1hover text-color-primer text-left">
										{formattedDateTime(date)}
									</th>
								</tr>
							</thead>
							<tbody>
								{data.map((item, index) => (
									<tr key={index} className="even:bg-color-tersier2">
										<td>{index + 1}</td>
										<td>{item.cashier_name}</td>
										<td>{item.customer_name}</td>
										<td>{item.table_name}</td>
										<td>{item.time_order}</td>
										<td>{item.time_finish}</td>
										<td>Rp {item.total_price}</td>
									</tr>
								))}
							</tbody>
						</React.Fragment>
					))}
				</table>
			</div>
		</div>
	);
};

export default TableHistoryList;
