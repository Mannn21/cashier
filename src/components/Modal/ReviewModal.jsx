import { formatToRupiah } from "@/utils/formatToRupiah";

const ReviewModal = ({ orders }) => {
	return (
		<table className="w-full h-auto p-2">
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
			<tbody className="w-full h-auto even:bg-color-secondary2">
				{orders.map((data, index) => {
					return (
						<tr key={index}>
							<td className="text-base font-semibold tracking-wided even:text-color-primer">
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
			</tbody>
		</table>
	);
};

export default ReviewModal;
