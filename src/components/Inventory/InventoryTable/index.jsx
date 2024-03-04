"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import {
	getAllInventoriesData,
	setInventoryData,
	getCategoryFilterState,
	getPriceSortState,
	getDiscountSortState,
	getStockSortState,
	getKeywordState,
} from "@/features/inventory/inventorySlice";
import { formatToRupiah } from "@/utils/formatToRupiah";
import { getMenus } from "@/services/getMenuDatas";

const InventoryTable = () => {
	const dispatch = useDispatch();
	const inventories = useSelector(getAllInventoriesData);
	const category = useSelector(getCategoryFilterState);
	const price = useSelector(getPriceSortState);
	const stock = useSelector(getStockSortState);
	const discount = useSelector(getDiscountSortState);
	const keyword = useSelector(getKeywordState);

	useEffect(() => {
		const response = async () => {
			const menus = await getMenus();
			dispatch(setInventoryData(menus));
		};
		response();
	}, [dispatch]);

	const sortedAndFilteredData = useMemo(() => {
		const filteredData = inventories?.filter(data => {
			const isCategoryMatch =
				category.toLowerCase() === "semua" ||
				category.toLowerCase() === data.category.toLowerCase();
			const isDatasSearch = data.name.toLowerCase().includes(keyword);
			return isCategoryMatch && isDatasSearch;
		});

		const sortedData = filteredData?.slice().sort((a, b) => {
			if (price === "up") {
				if (a.price !== b.price) return a.price - b.price;
			} else if (price === "down") {
				if (a.price !== b.price) return b.price - a.price;
			}

			if (stock === "up") {
				if (a.stock !== b.stock) return a.stock - b.stock;
			} else if (stock === "down") {
				if (a.stock !== b.stock) return b.stock - a.stock;
			}

			if (discount === "up") {
				if (a.discount !== b.discount) return a.discount - b.discount;
			} else if (discount === "down") {
				if (a.discount !== b.discount) return b.discount - a.discount;
			}

			return 0;
		});

		return sortedData;
	}, [inventories, category, keyword, price, stock, discount]);

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
					{sortedAndFilteredData?.map((data, index) => {
						return (
							<tr key={index}>
								<td className="text-base font-semibold text-color-dark">
									{index + 1}
								</td>
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
								<td className="text-base font-semibold text-color-dark">
									{data.name}
								</td>
								<td className="text-sm text-color-dark">{data.category}</td>
								<td className="text-sm text-color-dark">
									{formatToRupiah(data.price)}
								</td>
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
