"use client";

import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import Swal from "sweetalert2";
import { mdiDeleteOutline, mdiCheckboxMarkedCircleOutline } from "@mdi/js";
import { getOrder, checkOrder } from "@/services/getOrderDatas";
import { formatToRupiah } from "@/utils/formatToRupiah";

const ServingsTable = () => {
	const [list, setList] = useState([]);

	const fetchData = async () => {
		const response = await getOrder();
		const data = response.message;
		setList(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleCheck = async id => {
		Swal.fire({
			title: "Menunggu",
			text: "Sedang memproses pesanan...",
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});

		try {
			const res = await checkOrder(id);
			if (res.status === "Ok") {
				fetchData();
				Swal.fire({
					icon: "success",
					timer: 3000,
					timerProgressBar: true,
					title: "Sukses!",
					text: res.message,
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Ada kesalahan saat memproses pesanan.",
				});
			}
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Terjadi kesalahan saat memposting pesanan.",
			});
		}
	};

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
					{list?.map((data, index) => {
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
										onClick={() => handleCheck(data.id)}
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
