"use client"

import React, { useState, useEffect } from 'react';
import WorkTimerPieChart from '../Graphics/PieGraphic';

const TodayGraphic = () => {
  const totalWorkHours = 1; // Misalnya, total waktu kerja adalah 8 jam
  const [workedHours, setWorkedHours] = useState(4);

  useEffect(() => {
    const startTime = new Date().getTime(); // Waktu mulai hitung

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = (currentTime - startTime) / 1000; // Konversi dari milidetik ke detik
      setWorkedHours(Math.floor(elapsedTime / 3600)); // Update jumlah jam yang telah dikerjakan
    }, 1000); // Timer berjalan setiap detik

    // Membersihkan timer saat komponen unmount
    return () => clearInterval(timer);
  }, []); // useEffect akan dipanggil hanya sekali saat komponen dipasang

  return (
    <div className="w-auto h-auto p-3 bg-color-primer rounded-md shadow-xl">
      <div className="w-full h-full flex flex-col justify-center items-center gap-3">
        <div className="w-[200px] h-[200px] flex justify-center items-center">
          {/* Memanggil komponen WorkTimerPieChart dengan properti totalWorkHours dan workedHours */}
          <WorkTimerPieChart totalWorkHours={totalWorkHours} workedHours={workedHours} />
        </div>
        <div className="w-full h-auto flex justify-center items-center">
          <h3 className="text-base font-semibold tracking-wide text-color-dark">{`${workedHours} Jam / ${totalWorkHours} Jam`}</h3>
        </div>
      </div>
    </div>
  );
};

export default TodayGraphic;
