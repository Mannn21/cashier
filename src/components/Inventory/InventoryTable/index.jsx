import Image from "next/image";
import Icon from "@mdi/react";
import { mdiPencilOutline, mdiDeleteOutline } from "@mdi/js";
import { simulationInventoryData } from "@/data/simulationInventoryData";

const InventoryTable = () => {
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
						<th>Diskon</th>
						<th>Jumlah Stock</th>
						<th>Edit</th>
						<th>Hapus</th>
					</tr>
				</thead>
				<tbody>
					{simulationInventoryData?.map((data, index) => {
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
								<td>{data.discount}</td>
								<td>{data.stock}</td>
								<td className="text-color-secondary2">
									<Icon
										path={mdiPencilOutline}
										size={1}
										className="m-auto cursor-pointer hover:text-color-secondary2hover hover:rotate-12 transition-all ease-in-out duration-300"
									/>
								</td>
								<td className="text-color-accent">
									<Icon
										path={mdiDeleteOutline}
										size={1}
										className="m-auto cursor-pointer hover:text-color-accentHover hover:rotate-12 transition-all ease-in-out duration-300"
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default InventoryTable;
