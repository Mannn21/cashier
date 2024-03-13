"use client";

import React, { Suspense, useEffect, useState, useMemo } from "react";
import { getMostOrders } from "@/services/history";
import { sortedMostOrderDatas } from "@/utils/sortedMostOrderDatas";

const MostOrderTable = React.lazy(() => import("./MostOrderTable"));

const DashboardTable = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const response = async () => {
			const mostOrders = await getMostOrders();
			setOrders(mostOrders);
		};
		response();
	}, []);

	const sortedMostOrder = useMemo(() => {
		const sortedData = sortedMostOrderDatas(orders);
		return sortedData;
	}, [orders]);

	return (
		<div className="w-full h-auto p-2 flex flex-col justify-start items-center gap-4 mt-4 border-2 rounded-md">
			<h3 className="text-lg font-semibold tracking-wide">
				Penjualan Terbanyak Bulan Ini
			</h3>
			<Suspense fallback={<h1>Loading Table Datas...</h1>}>
				<MostOrderTable orders={sortedMostOrder} />
			</Suspense>
		</div>
	);
};

export default DashboardTable;
