"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import {
	getAllInventoriesData,
	setInventoryData,
} from "@/features/inventory/inventorySlice";
import { formatToRupiah } from "@/utils/formatToRupiah";

const InventoryTable = ({ foods, drinks }) => {
	const dispatch = useDispatch();
	const inventories = useSelector(getAllInventoriesData);

	useEffect(() => {
		const menus = [];
		foods.map(data => {
			menus.push(data);
		});
		drinks.map(data => {
			menus.push(data);
		});

		dispatch(setInventoryData(menus));
	}, [foods, drinks, dispatch]);

	return (
		<div className="w-full h-auto">
			<table className="w-full h-auto">
				<thead>
					<tr>
						<th>No</th>
						<th>Gambar Produk</th>
						<th>Nama</th>
						<th>Kategory</th>
						<th>Harga</th>
						<th>Diskon</th>
						<th>Jumlah Stock</th>
						<th>Edit</th>
						<th>Hapus</th>
					</tr>
				</thead>
				<tbody>
					{inventories?.map((data, index) => {
						return (
							<tr key={index}>
								<td className="text-base font-semibold text-color-dark">{index + 1}</td>
								<td className="flex justify-center items-center">
									<div className="w-[150px] h-[120px] overflow-hidden rounded-md flex justify-center items-center">
										<div className="relative w-full h-full">
											<Image
												src={data.image_URI}
												alt={data.name}
												layout="fill"
												objectFit="cover"
												className="object-center object-cover"
											/>
										</div>
									</div>
								</td>
								<td className="text-base font-semibold text-color-dark">{data.name}</td>
								<td className="text-sm text-color-dark">{data.category}</td>
								<td className="text-sm text-color-dark">{formatToRupiah(data.price)}</td>
								<td className="text-sm text-color-dark">{data.discount}%</td>
								<td className="text-sm text-color-dark">{data.stock}</td>
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

export default InventoryTable;
