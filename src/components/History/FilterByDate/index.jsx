"use client"

import React from 'react';
import { useDispatch } from "react-redux";
import { setDate } from '@/features/history/historySlice';
import { Calendar, theme } from 'antd';

const FilterByDate = () => {
  const dispatch = useDispatch()
  
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    backgroundColor: "#ffffff",
    boxShadow: " 2px 2px 2px #222222",
  };

  const onChange = (value) => {
    dispatch(setDate(value.format('YYYY-M-D')));
  };

  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} onChange={onChange} />
    </div>
  );
};

export default FilterByDate;
