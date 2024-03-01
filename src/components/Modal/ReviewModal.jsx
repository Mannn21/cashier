import { formatToRupiah } from "@/utils/formatToRupiah";

const ReviewModal = ({
	orders,
	totalPrice,
	totalItems,
	totalDiscount,
	totalOrders,
}) => {
	console.log({ totalPrice, totalItems, totalDiscount, totalOrders });

	return (
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
							<td>{formatToRupiah(data.price)}</td>
							<td>{data.discount}%</td>
							<td>{data.quantity}</td>
							<td>{formatToRupiah(data.totalPrice)}</td>
						</tr>
					);
				})}
				<tr>
					<td colspan="6">
						<hr className="w-full h-[1px] text-color-tersier3" />
					</td>
				</tr>
				<tr>
					<td colspan="5" className="text-right text-base font-semibold">
						Total item:{" "}
					</td>
					<td className="text-right font-semibold text-base text-color-dark">
						{totalItems} item
					</td>
				</tr>
				<tr>
					<td colspan="5" className="text-right text-base font-semibold">
						Total diskon:{" "}
					</td>
					<td className="text-right font-semibold text-base text-color-dark">
						{formatToRupiah(totalDiscount)}
					</td>
				</tr>
				<tr>
					<td colspan="5" className="text-right text-base font-semibold">
						Total harga:{" "}
					</td>
					<td className="text-right font-semibold text-base text-color-dark">
						{formatToRupiah(totalPrice)}
					</td>
				</tr>
				<tr>
					<td colspan="5" className="text-right text-base font-semibold">
						Total pajak:{" "}
					</td>
					<td className="text-right font-semibold text-base text-color-dark">
						{formatToRupiah(totalItems * 150)}
					</td>
				</tr>
				<tr>
					<td colspan="5" className="text-right text-base font-semibold">
						Total order:{" "}
					</td>
					<td className="text-right font-semibold text-base text-color-dark">
						{formatToRupiah(totalOrders)}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default ReviewModal;
