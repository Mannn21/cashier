"use client";

import { useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiPackageVariant } from "@mdi/js";
import InvoiceCard from "./InvoiceCard";
import { getAllCarts } from "@/features/cart/cartSlice";
import { formatToRupiah } from "@/utils/formatToRupiah";

const EmptyInvoice = () => {
	return (
		<div className="w-full h-auto p-2">
			<div className="w-full h-auto flex flex-col justify-center items-center gap-3 text-color-tersier3">
				<Icon path={mdiPackageVariant} size={5} />
                <span className="text-base font-semibold tracking-wide">Silahkan pilih menu!</span>
			</div>
		</div>
	);
};

const Invoice = () => {
	const carts = useSelector(getAllCarts);
	const { orders } = carts;


	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto flex flex-col gap-1 justify-start items-center">
				<div className="w-full h-auto text-center">
					<h2 className="text-lg font-semibold tracking-wide">Pesanan</h2>
				</div>
				<div className="w-full h-auto flex flex-col gap-1 justify-start items-center">
					{orders.length < 1 ? (
						<EmptyInvoice />
					) : (
						orders.map(data => {
							return <InvoiceCard key={data.id} data={data} />;
						})
					)}
				</div>
				<div className="w-full h-auto flex flex-col gap-1 mt-4">
					<div className="w-full h-auto text-center">
						<h3 className="text-base font-semibold tracking-wide">
							Pembayaran
						</h3>
					</div>
					<div className="w-full h-auto flex flex-col gap-1">
						<div className="w-full h-auto flex flex-row justify-between items-center p-1">
							<h4>Sub Total</h4>
							<span>
								{carts.total_price < 1
									? "Rp. 0"
									: formatToRupiah(carts.total_price)}
							</span>
						</div>
						<div className="w-full h-auto flex flex-row justify-between items-center p-1">
							<h4>Tax</h4>
							<span>
								{carts.total_items < 1
									? "Rp. 0"
									: formatToRupiah(carts.total_items * 150)}
							</span>
						</div>
						<div className="w-full h-auto flex flex-row justify-between items-center p-1">
							<h4>Discount</h4>
							<span>
								{carts.total_discount < 1
									? "Rp. 0"
									: formatToRupiah(carts.total_discount)}
							</span>
						</div>
						<div className="w-full h-auto flex flex-row justify-between items-center p-1">
							<h4>Total</h4>
							<span>
								{carts.total_orders < 1
									? "Rp. 0"
									: formatToRupiah(carts.total_orders)}
							</span>
						</div>
					</div>
					<div className="w-full h-auto flex justify-center items-center">
						<button
							type="button"
							className="px-4 py-2 text-base font-medium text-color-primer bg-color-secondary1 cursor-pointer rounded-xl hover:bg-color-secondary1hover transition-all ease-in-out duration-300">
							Bayar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Invoice;
