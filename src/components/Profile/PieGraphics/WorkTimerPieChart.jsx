import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const WorkTimerPieChart = ({ data }) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={98}
          innerRadius={60}
          fill="rgba(5, 5, 5, 0.301)"
          stroke='none'
        >
          <Cell key={data[0].name} />
          <Cell key={data[1].name} fill="#4169E1" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default WorkTimerPieChart;
