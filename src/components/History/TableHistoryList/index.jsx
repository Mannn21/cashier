"use client";

import React, { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
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
			<table className="w-full h-auto">
				<thead>
					<tr>
						<th>No</th>
						<th>Nama Kasir</th>
						<th>Nama Pelanggan</th>
						<th>Nama Meja</th>
						<th>Total Harga</th>
						<th>Waktu Pemesanan</th>
						<th>Waktu Selesai</th>
						<th>Edit</th>
						<th>Hapus</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(groupedDataByDate).map(([date, data]) => (
						<React.Fragment key={date}>
							<h2>{formattedDateTime(date)}</h2>
							{data.map((item, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{item.cashier_name}</td>
									<td>{item.customer_name}</td>
									<td>{item.table_name}</td>
									<td>Rp {item.total_price}</td>
									<td>{item.time_order}</td>
									<td>{item.time_finish}</td>
									<td className="text-color-secondary2">
										<Icon
											path={mdiPencilOutline}
											size={1}
											className="m-auto cursor-pointer hover:text-color-secondary2hover hover:rotate-12 transition-all ease-in-out duration-300"
										/>
									</td>
									<td className="text-color-accent">
										<Icon
											path={mdiDeleteOutline}
											size={1}
											className="m-auto cursor-pointer hover:text-color-accentHover hover:rotate-12 transition-all ease-in-out duration-300"
										/>
									</td>
								</tr>
							))}
						</React.Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableHistoryList;
