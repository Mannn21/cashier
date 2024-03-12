import Image from "next/image";

const DashboardTable = ({ orders }) => {
	console.log(
		"%cFetching Started...",
		"style: background-color: black; color: crimson; padding 10px"
	);
	console.table(orders);
	console.log(
		"%cFetching Done",
		"style: background-color: black; color: teal; padding 10px"
	);
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
						<th>Jumlah Terjual</th>
					</tr>
				</thead>
				<tbody>
					{orders?.map((data, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td className="flex justify-center items-center">
									<div className="w-[150px] h-[120px] overflow-hidden rounded-md flex justify-center items-center">
										<div className="relative w-full h-full">
											<Image
												src={data.image_URI}
												alt={data.name}
												layout="fill"
												objectFit="cover"
												className="object-center object-cover"
											/>
										</div>
									</div>
								</td>
								<td>{data.name}</td>
								<td>{data.category}</td>
								<td>{data.price}</td>
								<td>{data.discount}</td>
								<td>{data.quantity}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default DashboardTable;
