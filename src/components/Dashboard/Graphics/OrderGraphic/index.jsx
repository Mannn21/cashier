import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const OrderGraphic = ({datas}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={datas}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="days"  />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total_item" fill="#4169E1" activeBar={<Rectangle fill="#2E417A" stroke="#2E417A" />} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default OrderGraphic;