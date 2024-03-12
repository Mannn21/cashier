"use client";

import React, { useState, useEffect } from "react";
import FooterModal from "@/components/Modal/FooterModal";
import { useSelector } from "react-redux";
import { getAllCarts } from "../cart/cartSlice";
import { paymentDenomination } from "@/data/paymentDenomination";
import { formatToRupiah } from "@/utils/formatToRupiah";
import { generateTableOptions } from "@/utils/generateTableOptions";
import { currentTime } from "@/utils/currentTime";
import { giveCurrentDateTime } from "@/utils/currentDate";

const PaymentModal = () => {
	const [customerName, setCustomerName] = useState("");
	const [customerCount, setCustomerCount] = useState(0);
	const [selectedTableOptions, setSelectedTableOptions] = useState([]);
	const [selectedTable, setSelectedTable] = useState("");
	const [paymentValue, setPaymentValue] = useState(null);

	const cartData = useSelector(getAllCarts);
	const { orders, total_discount, total_items, total_orders, total_price } =
		cartData;

	useEffect(() => {
		async function fetchData() {
			const options = await generateTableOptions(customerCount);
			setSelectedTableOptions(options);
			setSelectedTable(options[0]?.props?.children[0]?.props?.value);
		}
		fetchData();
	}, [customerCount]);

	const handleCustomerCountChange = event => {
		setCustomerCount(parseInt(event.target.value));
	};

	const handleTableSelection = event => {
		setSelectedTable(event.target.value);
	};

	const handleCustomerName = e => {
		setCustomerName(e.target.value);
	};


	const data = {
		orders,
		table_id: selectedTable,
		customer_name: customerName,
		date: giveCurrentDateTime(),
		order_time: currentTime(),
		cashier_id: "5f567704-e8f5-4726-8045-33fca74eff63",
		total_price,
		total_orders,
		total_item: total_items,
		total_discount,
		total_payment: paymentValue,
	};

	return (
		<div className="w-full h-auto bg-color-primer overflow-auto">
			<div className="w-full h-auto flex flex-col">
				<div className="w-full h-auto flex flex-col gap-2">
					<label htmlFor="costumer">Nama Pelanggan</label>
					<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
						<input
							type="text"
							onChange={handleCustomerName}
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
							{selectedTableOptions}
						</select>
					</div>
				</div>
				<div className="w-full h-auto flex flex-col gap-2">
					<label htmlFor="payment">Masukkan pecahan pembayaran</label>
					<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
						<input
							type="text"
							placeholder="Masukkan pecahan pembayaran..."
							value={paymentValue}
							onChange={e => {
								setPaymentValue(e.target.value);
							}}
							className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
						/>
					</div>
					<div className="w-full h-auto grid grid-cols-3 gap-3">
						{paymentDenomination.map((current, index) => {
							return (
								<button
									key={index}
									className="w-auto h-auto p-1 border rounded-md bg-color-primer hover:bg-color-secondary1 hover:text-color-primer duration-300 ease-in-out transition-all"
									onClick={() => {
										setPaymentValue(current);
									}}>
									{formatToRupiah(current)}
								</button>
							);
						})}
					</div>
				</div>
			</div>
			<div className="w-full h-auto">
				<FooterModal data={data} />
			</div>
		</div>
	);
};

export default PaymentModal;
