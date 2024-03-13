"use client";

import React, { Suspense, useEffect, useState } from "react";
import { getIncomeByMonth } from "@/services/history";
import { dashboardDisplayData } from "@/data/dashboardDisplayData";
import { formatToRupiah } from "@/utils/formatToRupiah";

const CardData = React.lazy(() => import("../CardData"));

const ListCard = () => {
	const [details, setDetails] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await getIncomeByMonth();
			const formattedDetails = {
				total_prices: formatToRupiah(response?.total_prices),
				total_income: formatToRupiah(response?.total_income),
				total_taxes: formatToRupiah(response?.total_taxes),
				total_orders: response?.total_orders,
				total_items: response?.total_items,
			};
			setDetails(formattedDetails);
		};
		fetchData();
	}, []);

	return (
		<div className="w-full h-auto p-2">
			<div className="w-full h-auto grid grid-cols-5 gap-x-8">
				{details !== null ? dashboardDisplayData?.map((data, index) => {
					const detailValue = details[data.name]; // Get the value based on the name
					if (detailValue !== undefined) {
						return (
							<Suspense key={index} fallback={<h1>Loading Details Data..</h1>}>
								<CardData data={data} details={{ value: detailValue }} />
							</Suspense>
						);
					} else {
						return null;
					}
				}): <span>Loading...</span>}
			</div>
		</div>
	);
};

export default ListCard;
