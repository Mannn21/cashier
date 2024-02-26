import React, { useState, useEffect } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const WorkTimerPieChart = ({ totalWorkHours }) => {
  const [count, setCount] = useState(0);
  const [workedTimes, setWorkedTimes] = useState(2 * 10);
  const [isTimerRunning, setIsTimerRunning] = useState(true); // Tambahkan state untuk mengontrol interval

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
        setWorkedTimes(prevTimes => prevTimes - 1);
        
        if (workedTimes <= 1) {
          clearInterval(interval);
          setIsTimerRunning(false); // Setel isTimerRunning menjadi false ketika waktu kerja telah tercapai
        }
      }, 1000);
    }

    console.log({count, workedTimes, isTimerRunning})
    
    return () => clearInterval(interval);
  }, [count, workedTimes, isTimerRunning]);

  const data = [
    { name: 'Worked', value: workedTimes },
    { name: 'Remaining', value: count },
  ];

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={50}
          fill="rgba(5, 5, 5, 0.301)"
          stroke='none'
        >
          <Cell key="worked" />
          <Cell key="remaining" fill="#CC0000" />
          
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="15" fill="#000000">
            {formatTime(count)}
          </text>
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default WorkTimerPieChart;
