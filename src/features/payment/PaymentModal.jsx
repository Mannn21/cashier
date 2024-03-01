"use client";

import React, { useState } from "react";
import { simulationTableData } from "@/data/simulationTableData";
import { formatToRupiah } from "@/utils/formatToRupiah";

const PaymentModal = () => {
	const [customerCount, setCustomerCount] = useState(0);
	const [selectedTable, setSelectedTable] = useState("");
	const [paymentAmount, setPaymentAmount] = useState("");

	const handlePaymentAmountChange = event => {
		const rawValue = event.target.value.replace(/\D/g, "");
		const formattedValue = formatToRupiah(parseInt(rawValue));
		setPaymentAmount(formattedValue);
	};

	const handleCustomerCountChange = event => {
		setCustomerCount(parseInt(event.target.value));
	};

	const handleTableSelection = event => {
		setSelectedTable(event.target.value);
	};

	const groupedTables = simulationTableData.reduce((groups, table) => {
		if (!groups[table.category]) {
			groups[table.category] = [];
		}
		groups[table.category].push(table);
		return groups;
	}, {});

	const generateTableOptions = () => {
		return Object.entries(groupedTables)
		  .filter(([category, tables]) =>
			tables.some((table) => !table.status && table.capacity >= customerCount)
		  )
		  .map(([category, tables]) => (
			<optgroup key={category} label={category}>
			  {tables
				.filter((table) => !table.status && table.capacity >= customerCount)
				.map((table) => (
				  <option key={table.name} value={table.name}>
					{table.name} ({table.capacity} kursi)
				  </option>
				))}
			</optgroup>
		  ));
	  };
	  
	  

	return (
		<div className="w-full h-auto bg-color-primer">
			<div className="w-full h-auto flex flex-col">
				<div className="w-full h-auto flex flex-col gap-2">
					<label htmlFor="costumer">Nama Pelanggan</label>
					<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
						<input
							type="text"
							placeholder="Masukkan nama pelanggan..."
							className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
						/>
					</div>
				</div>
				<div className="w-full h-auto flex flex-col gap-2">
					<label htmlFor="count">Jumlah Pelanggan</label>
					<div className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
						<input
							type="number"
							placeholder="Masukkan jumlah pelanggan..."
							onChange={handleCustomerCountChange}
							className="w-full h-auto border-none outline-none focus:border-none focus:outline-none"
						/>
					</div>
				</div>
				<div className="w-full h-auto flex flex-col gap-2">
					<label htmlFor="table">Pilih Meja Makan</label>
					<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
						<select
							className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
							onChange={handleTableSelection}
							disabled={customerCount === 0}>
							<option value="">Pilih Meja</option>
							{generateTableOptions()}
						</select>
					</div>
				</div>
				<div className="w-full h-auto flex flex-col gap-2">
					<label htmlFor="payment">Masukkan pecahan pembayaran</label>
					<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
						<input
							type="teks"
							placeholder="Masukkan pecahan pembayaran..."
							value={paymentAmount}
							onChange={handlePaymentAmountChange}
							className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
						/>
					</div>
					<div className="w-full h-auto grid grid-cols-3 gap-3">
						<button>Rp. 10,000</button>
						<button>Rp. 20,000</button>
						<button>Rp. 50,000</button>
						<button>Rp. 100,000</button>
						<button>Rp. 200,000</button>
						<button>Rp. 500,000</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentModal;
