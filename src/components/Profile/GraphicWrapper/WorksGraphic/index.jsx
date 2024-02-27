"use client"

import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "Sun", income: 5340, tax: 2400 },
	{ name: "Mon", income: 3400, tax: 1320 },
	{ name: "Tue", income: 4500, tax: 9800 },
	{ name: "Wed", income: 2780, tax: 3908 },
	{ name: "Thu", income: 7890, tax: 4800 },
	{ name: "Fri", income: 2390, tax: 8800 },
	{ name: "Sat", income: 3490, tax: 4300 },
];

const formatYAxis = value => {
	if (value >= 1000) {
		return `${value / 1000}k`;
	}
	return value;
};


const WorksGraphic = () => (
	<ResponsiveContainer width="100%" height="90%">
		<AreaChart
			width={500}
			height={400}
			data={data}
			margin={{ top: 20, right: 15, left: -20, bottom: 0 }}>
			<CartesianGrid vertical={false} strokeOpacity={0.2} />
			<XAxis dataKey="name" tickLine={false} />
			<YAxis
				orientation="left"
				axisLine={false}
				tickFormatter={formatYAxis}
				tickLine={false}
			/>
			<Tooltip />
			<Area
				type="monotone"
				dataKey="income"
				stackId="1"
				stroke="#4169E1"
				fill="#3c5dc0b5"
			/>
			<Area
				type="monotone"
				dataKey="tax"
				stackId="1"
				stroke="#3CB371"
				fill="#3b9664b2"
			/>
		</AreaChart>
	</ResponsiveContainer>
);

export default WorksGraphic;