import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { simulationHistoryData } from "@/data/simulationHistoryData";

const TableHistoryList = () => {
	return (
		<div>
			<div>
				<table>
					<thead>
						<tr>
							<th>No</th>
							<th>Id Pesanan</th>
							<th>Tanggal Pesanan</th>
							<th>Nama Kasir</th>
							<th>Nama Pelanggan</th>
							<th>Id Meja</th>
							<th>Total Harga</th>
							<th>Waktu Pemesanan</th>
							<th>Waktu Selesai</th>
							<th>Edit</th>
							<th>Hapus</th>
						</tr>
					</thead>
					<tbody>
						{simulationHistoryData?.map((data, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{data.idInvoice}</td>
									<td>{data.date}</td>
									<td>{data.cashier}</td>
									<td>{data.customer}</td>
									<td>{data.tableId}</td>
									<td>Rp {data.totalPrice}</td>
									<td>{data.orderTime}</td>
									<td>{data.orderFinish}</td>
									<td className="text-color-secondary2">
										<Icon path={mdiPencilOutline} size={1} className="m-auto cursor-pointer hover:text-color-secondary2hover hover:rotate-12 transition-all ease-in-out duration-300"/>
									</td>
									<td className="text-color-accent">
										<Icon path={mdiDeleteOutline} size={1} className="m-auto cursor-pointer hover:text-color-accentHover hover:rotate-12 transition-all ease-in-out duration-300"/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableHistoryList;
