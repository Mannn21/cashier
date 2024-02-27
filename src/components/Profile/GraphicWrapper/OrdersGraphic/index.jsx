"use client"

import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sun',
    orders: 200,
  },
  {
    name: 'Mon',
    orders: 500,
  },
  {
    name: 'Tue',
    orders: 150,
  },
  {
    name: 'Wed',
    orders: 185,
  },
  {
    name: 'Thu',
    orders: 370,
  },
  {
    name: 'Fri',
    orders: 464,
  },
  {
    name: 'Sat',
    orders: 540,
  },
];

const OrderGraphic = () => {
  return (
    <ResponsiveContainer width="100%" height="95%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 15,
          left: -20,
          bottom: 2,
        }}
      >
        <XAxis dataKey="name"  />
        <YAxis />
        <Tooltip />
        <Bar dataKey="orders" fill="#4169E1" activeBar={<Rectangle fill="#2E417A" stroke="#2E417A" />} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default OrderGraphic;