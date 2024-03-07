"use client";

import { useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Icon from "@mdi/react";
import { mdiDeleteOutline, mdiCheckboxMarkedCircleOutline } from "@mdi/js";
import {
	getKeywordState,
	addServings,
	getAllServings,
} from "@/features/servings/servingsSlice";
import { getOrder } from "@/services/orders";
import { formatToRupiah } from "@/utils/formatToRupiah";
import { handlePostServings } from "@/services/handlePostServings";
import { searchedDataServingsByKeyword } from "@/utils/searchedDataServingsByKeyword";

const ServingsTable = () => {
	const dispatch = useDispatch();
	const keyword = useSelector(getKeywordState);
	const servings = useSelector(getAllServings);

	const fetchData = useCallback(async () => {
		const response = await getOrder();
		const data = response.message;
		dispatch(addServings(data));
	}, [dispatch]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const searchedData = useMemo(() => {
		const searchData = searchedDataServingsByKeyword(servings, keyword)
		return searchData;
	}, [keyword, servings]);

	const handleSubmit = (id) => {
		handlePostServings(id, fetchData)
	}

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
						<th>Tandai Selesai</th>
						<th>Hapus</th>
					</tr>
				</thead>
				<tbody className="w-full h-auto">
					{searchedData?.map((data, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{data.dateOrder}</td>
								<td>{data.cashierName}</td>
								<td>{data.customerName}</td>
								<td>{data.tableName}</td>
								<td>{formatToRupiah(data.totalPrice)}</td>
								<td>{data.timeOrder}</td>
								<td className="text-color-secondary2">
									<Icon
										path={mdiCheckboxMarkedCircleOutline}
										onClick={() => handleSubmit(data.id)}
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

export default ServingsTable;
