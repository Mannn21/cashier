"use client";

import { useSelector } from "react-redux";
import FooterModal from "./FooterModal";
import { getAllCarts } from "@/features/cart/cartSlice";
import { formatToRupiah } from "@/utils/formatToRupiah";

const ReviewModal = () => {
	const carts = useSelector(getAllCarts);
	const { orders, total_discount, total_items, total_price, total_orders } =
		carts;


	return (
		<div className="w-full h-auto flex flex-col gap-3 justify-center items-center">
			<table className="w-full h-auto px-2 py-3">
				<thead className="w-full h-auto">
					<tr>
						<th>No</th>
						<th>Nama Menu</th>
						<th>Harga Satuan</th>
						<th>Discount</th>
						<th>Jumlah</th>
						<th>Total Harga</th>
					</tr>
				</thead>
				<tbody className="w-full h-auto">
					{orders.map((data, index) => {
						return (
							<tr key={index} className="odd:bg-color-secondary2">
								<td className="text-base font-semibold tracking-wided">
									{index + 1}
								</td>
								<td>{data.name}</td>
								<td>{formatToRupiah(data.price_order)}</td>
								<td>{data.discount_order}%</td>
								<td>{data.quantity}</td>
								<td>{formatToRupiah(data.total_price)}</td>
							</tr>
						);
					})}
					<tr>
						<td colSpan="6">
							<hr className="w-full h-[1px] text-color-tersier3" />
						</td>
					</tr>
					<tr>
						<td colSpan="5" className="text-right text-base font-semibold">
							Total item:{" "}
						</td>
						<td className="text-right font-semibold text-base text-color-dark">
							{total_items} item
						</td>
					</tr>
					<tr>
						<td colSpan="5" className="text-right text-base font-semibold">
							Total diskon:{" "}
						</td>
						<td className="text-right font-semibold text-base text-color-dark">
							{formatToRupiah(total_discount)}
						</td>
					</tr>
					<tr>
						<td colSpan="5" className="text-right text-base font-semibold">
							Total order:{" "}
						</td>
						<td className="text-right font-semibold text-base text-color-dark">
							{formatToRupiah(total_orders)}
						</td>
					</tr>
					<tr>
						<td colSpan="5" className="text-right text-base font-semibold">
							Total pajak:{" "}
						</td>
						<td className="text-right font-semibold text-base text-color-dark">
							{formatToRupiah(total_items * 150)}
						</td>
					</tr>
					<tr>
						<td colSpan="5" className="text-right text-base font-semibold">
							Total harga:{" "}
						</td>
						<td className="text-right font-semibold text-base text-color-dark">
							{formatToRupiah(total_price)}
						</td>
					</tr>
				</tbody>
			</table>
			<FooterModal />
		</div>
	);
};

export default ReviewModal;
