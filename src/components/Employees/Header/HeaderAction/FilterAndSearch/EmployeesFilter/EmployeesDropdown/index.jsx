"use client"

import React from "react";
import { Select } from "antd";

const EmployeesDropdown = () => {
	const handleChange = value => {
		console.log(`selected ${value}`);
	};
	return (
		<Select
			defaultValue="---Sortir Data---"
			className="w-[250px] h-[40px] text-center bg-color-transparent"
			onChange={handleChange}
			options={[
				{
					label: <span>Nama</span>,
					title: "name",
					options: [
						{
							label: <span>A - Z</span>,
							value: "upName",
						},
						{
							label: <span>Z - A</span>,
							value: "downName",
						},
					],
				},
				{
					label: <span>Usia</span>,
					title: "age",
					options: [
						{
							label: <span>Termuda - Tertua</span>,
							value: "upAge",
						},
						{
							label: <span>Tertua - Termuda</span>,
							value: "downAge",
						},
					],
				},
				{
					label: <span>Gaji</span>,
					title: "salary",
					options: [
						{
							label: <span>Terkecil - Terbesar</span>,
							value: "upSalary",
						},
						{
							label: <span>Terbesar - Terkecil</span>,
							value: "downSalary",
						},
					],
				},
				{
					label: <span>Bergabung</span>,
					title: "join",
					options: [
						{
							label: <span>Terbaru - Terlama</span>,
							value: "upJoin",
						},
						{
							label: <span>Terlama - Terbaru</span>,
							value: "downJoin",
						},
					],
				},
			]}
		/>
	);
};

export default EmployeesDropdown;
