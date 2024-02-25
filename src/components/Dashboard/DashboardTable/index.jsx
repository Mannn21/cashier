import Image from "next/image";
import { simulationMostOrder } from "@/data/simulationMostOrder";

const DashboardTable = () => {
	return (
		<div className="w-full h-auto">
			<table className="w-full h-auto">
				<thead>
					<tr>
						<th>No</th>
						<th>Gambar Produk</th>
						<th>Nama</th>
						<th>Kategory</th>
						<th>Harga</th>
                        <th>Jumlah Terjual</th>
					</tr>
				</thead>
				<tbody>
					{simulationMostOrder?.map((data, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>
									<Image
										src={data.image_url}
										alt={data.name}
										width={100}
										height={100}
										className="m-auto"
									/>
								</td>
								<td>{data.name}</td>
								<td>{data.category}</td>
								<td>{data.price}</td>
								<td>{data.sold}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default DashboardTable;
