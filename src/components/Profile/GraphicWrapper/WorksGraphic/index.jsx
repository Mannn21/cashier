"use client";

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
	{ name: "Sun", works: 493, target: 480 },
	{ name: "Mon", works: 501, target: 480 },
	{ name: "Tue", works: 483, target: 480 },
	{ name: "Wed", works: 511, target: 480 },
	{ name: "Thu", works: 472, target: 480 },
	{ name: "Fri", works: 488, target: 480 },
	{ name: "Sat", works: 528, target: 480 },
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
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Area
				type="monotone"
				dataKey="works"
				stackId="1"
				stroke="##F9769D"
				fill="#F9769D"
			/>
		</AreaChart>
	</ResponsiveContainer>
);

export default WorksGraphic;
