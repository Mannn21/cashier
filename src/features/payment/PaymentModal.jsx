"use client";

import React, { useState } from "react";
import FooterModal from "@/components/Modal/FooterModal";
import { useSelector, useDispatch } from "react-redux";
import { setOrder, getOrderData } from "../order/orderSlice";
import { simulationTableData } from "@/data/simulationTableData";
import { paymentDenomination } from "@/data/paymentDenomination";
import { formatToRupiah } from "@/utils/formatToRupiah";
import { generateTableOptions } from "@/utils/generateTableOptions";
import { paymentAmountChange } from "@/utils/paymentAmountChange";

const PaymentModal = () => {
	const [customerCount, setCustomerCount] = useState(0);
	const [selectedTable, setSelectedTable] = useState("");
	const [paymentAmount, setPaymentAmount] = useState("");

	const handleCustomerCountChange = event => {
		setCustomerCount(parseInt(event.target.value));
	};

	const handleTableSelection = event => {
		setSelectedTable(event.target.value);
	};

	

	return (
		<div className="w-full h-auto bg-color-primer overflow-auto">
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
							{generateTableOptions(simulationTableData, customerCount)}
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
							onChange={() => setPaymentAmount(paymentAmountChange())}
							className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
						/>
					</div>
					<div className="w-full h-auto grid grid-cols-3 gap-3">
						{paymentDenomination.map((current, index) => {
							return (
								<button
									key={index}
									className="w-auto h-auto p-1 border rounded-md bg-color-primer hover:bg-color-secondary1 hover:text-color-primer duration-300 ease-in-out transition-all"
									onClick={() => setPaymentAmount(formatToRupiah(current))}>
									{formatToRupiah(current)}
								</button>
							);
						})}
					</div>
				</div>
			</div>
			<div className="w-full h-auto">
				<FooterModal />
			</div>
		</div>
	);
};

export default PaymentModal;
