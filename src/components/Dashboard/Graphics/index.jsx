"use client";

import React, { Suspense, useEffect, useState } from "react";
import GraphicLoader from "@/components/Loader/GraphicLoader";
import { getOrdersByWeeks } from "@/services/history";

const IncomeGraphic = React.lazy(() => import("./IncomeGraphic"))
const OrderGraphic = React.lazy(() => import("./OrderGraphic"))

const Graphics = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
		const response = async () => {
			const datas = await getOrdersByWeeks();
			setDatas(datas);
		};
		response();
	}, []);

	return (
		<div className="w-full h-auto flex flex-row gap-2">
			<div className="w-1/2 h-[300px] p-2 rounded-md shadow-xl bg-color-primer">
				<Suspense fallback={<GraphicLoader />}>
					<IncomeGraphic datas={datas} />
				</Suspense>
			</div>
			<div className="w-1/2 h-[300px] p-2 rounded-md shadow-xl bg-color-primer">
				<Suspense fallback={<GraphicLoader />}>
					<OrderGraphic datas={datas} />
				</Suspense>
			</div>
		</div>
	);
};

export default Graphics;
