"use client";

import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { getHistory } from "@/services/getHistoryDatas";

const TableHistoryList = () => {
	const [list, setList] = useState([]);

	const fetchData = async () => {
		const response = await getHistory();
		const data = response.message;
		setList(data);
	};

	useEffect(() => {
		fetchData();
	}, []); 

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
					{list?.map((data, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{data.date_order}</td>
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
