"use client"

import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sun',
    myOrders: 212,
    totalOrders: 522
  },
  {
    name: 'Mon',
    myOrders: 582,
    totalOrders: 1043
  },
  {
    name: 'Tue',
    myOrders: 153,
    totalOrders: 973
  },
  {
    name: 'Wed',
    myOrders: 185,
    totalOrders: 884
  },
  {
    name: 'Thu',
    myOrders: 373,
    totalOrders:1129
  },
  {
    name: 'Fri',
    myOrders: 412,
    totalOrders: 1264
  },
  {
    name: 'Sat',
    myOrders: 536,
    totalOrders: 1343
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
        <Bar dataKey="myOrders" fill="#4169E1" activeBar={<Rectangle fill="#2E417A" stroke="#2E417A" />} />
        <Bar dataKey="totalOrders" fill="#3CB371" activeBar={<Rectangle fill="#2C8A6F" stroke="#2C8A6F" />} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default OrderGraphic;