import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Rectangle
} from "recharts";


const AreaCharts = ({ datas }) => {
	const formatYAxis = value => {
		if (value >= 1000) {
			return `${value / 1000}k`;
		}
		return value;
	};
	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				width={500}
				height={400}
				data={datas}
				margin={{ top: 40, right: 30, left: 0, bottom: 0 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="days"
				/>
				<YAxis tickFormatter={formatYAxis} />
				<Tooltip />
				<Bar
					type="monotone"
					dataKey="total_taxes"
					stroke="#4169E1"
					fill="#4169E1"
					activeBar={<Rectangle fill="#3c5dc0b5" stroke="#3c5dc0b5" />}
				/>
				<Bar
					type="monotone"
					dataKey="total_price"
					stroke="#3CB371"
					fill="#3b9664b2"
					activeBar={<Rectangle fill="#3c5dc0b5" stroke="#3c5dc0b5" />}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default AreaCharts;
