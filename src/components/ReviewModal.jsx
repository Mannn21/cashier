import Image from "next/image";
import { dateFormatter } from "@/utils/dateFormatter";
import { formatToRupiah } from "@/utils/formatToRupiah";

const ReviewModal = ({ orders }) => {
	return (
		<div className="w-full h-full">
			<div className="w-full h-auto flex flex-col gap-3 justify-center items-center">
				<div className="w-full h-auto flex flex-row justify-between items-center px-3">
					<div className="w-auto h-full flex flex-col gap-2">
						<h3 className="text-3xl font-bold tracking-wide text-color-dark">
							Invoice
						</h3>
						<span className="text-base font-medium tracking-wide">
							Nama Kasir: Aimanurrofi
						</span>
						<span className="text-base font-medium tracking-wide">
							Tanggal Pesanan: {dateFormatter()}
						</span>
					</div>
					<Image src="/logo.png" width={100} height={100} alt="Logo Fies" />
				</div>
				<table className="w-full h-auto p-2">
					<thead className="w-full h-auto">
						<th>No</th>
						<th>Nama Menu</th>
						<th>Harga Satuan</th>
						<th>Discount</th>
						<th>Jumlah</th>
						<th>Total Harga</th>
					</thead>
					{orders.map((data, index) => {
						return (
							<tbody className="w-full h-auto even:bg-color-secondary2" key={index}>
								<td className="text-base font-semibold tracking-wided even:text-color-primer">
									{index + 1}
								</td>
								<td>{data.name}</td>
								<td>{formatToRupiah(data.price)}</td>
								<td>{data.discount}%</td>
								<td>{data.quantity}</td>
								<td>{formatToRupiah(data.totalPrice)}</td>
							</tbody>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default ReviewModal;
