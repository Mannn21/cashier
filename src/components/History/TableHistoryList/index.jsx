"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {useDispatch, useSelector} from "react-redux";
import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { getHistory } from "@/services/getHistoryDatas";
import { addHistory, getAllHistory, getDate, getKeyword } from "@/features/history/historySlice";
import { formattedDateTime } from "@/utils/formattedDateTime";
import { getDateOrder } from "@/utils/getDateOrder";

const TableHistoryList = () => {
	const dispatch = useDispatch();
	const history = useSelector(getAllHistory);
	const keyword = useSelector(getKeyword);
	const date = useSelector(getDate)

	const fetchData = useCallback(async () => {
		const response = await getHistory();
		const data = response.message;
		dispatch(addHistory(data))
	}, [dispatch]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const searchedData = useMemo(() => {
		return history?.filter(data => {
			const searchData = ["customer_name", "cashier_name", "table_name"].some(
				prop => data[prop] && data[prop].toLowerCase().includes(keyword.toLowerCase())
			);

			if(date === "") {
				return searchData;
			}

			const formattedDate = getDateOrder(data.date_order);
			const isDateMatch = formattedDate === date;
	
			return searchData && isDateMatch;
		});
	}, [keyword, history, date]);


	return (
		<div className="w-full h-auto">
			<table className="w-full h-auto">
				<thead>
					<tr>
						<th>No</th>
						<th>Tanggal Pesanan</th>
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
					{searchedData?.map((data, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{formattedDateTime(data.date_order)}</td>
								<td>{data.cashier_name}</td>
								<td>{data.customer_name}</td>
								<td>{data.table_name}</td>
								<td>Rp {data.total_price}</td>
								<td>{data.time_order}</td>
								<td>{data.time_finish}</td>
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
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default TableHistoryList;
