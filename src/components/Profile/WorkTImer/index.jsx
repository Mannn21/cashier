"use client"

import React, { useState, useEffect } from 'react';
import WorkTimerPieChart from '../PieGraphics/WorkTimerPieChart';

const TodayGraphic = () => {
  const [count, setCount] = useState(0);
  const [workedTimes, setWorkedTimes] = useState(8 * 3600);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
        setWorkedTimes(prevTimes => prevTimes - 1);
        
        if (workedTimes <= 1) {
          clearInterval(interval);
          setIsTimerRunning(false);
        }
      }, 1000);
    }

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
    <div className="w-[300px] h-auto p-3 bg-color-primer rounded-md shadow-xl">
      <div className="w-full h-full flex flex-col justify-center items-center gap-3">
        <div className="w-full h-[200px] flex justify-center items-center">
          <WorkTimerPieChart data={data} />
        </div>
        <div className="w-full h-auto flex justify-center items-center">
          <h3 className="text-base font-semibold tracking-wide text-color-dark">{formatTime(count)}</h3>
        </div>
      </div>
    </div>
  );
};

export default TodayGraphic;
