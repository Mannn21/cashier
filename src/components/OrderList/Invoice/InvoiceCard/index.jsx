import Image from "next/image";

const InvoiceCard = ({data}) => {
	const formatToRupiah = angka => {
		const rupiah = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return `Rp. ${rupiah}`;
	}
	
	return (
		<div className="w-full h-[100px] p-1 bg-color-primary">
			<div className="w-full h-full flex flex-row gap-2">
				<div className="w-[100px] h-full object-contain rounded-md overflow-hidden">
					<Image
						src={data.image_URI}
						alt="image"
						width={200}
						height={200}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="w-[calc(100% - 94px)] h-full flex flex-row justify-between items-center">
					<div className="w-full h-full flex flex-col justify-around items-start">
						<h2 className="text-lg font-semibold tracking-wide">{data.name}</h2>
						<div className="w-full h-auto flex flex-row justify-between items-center">
							<span className="text-sm font-medium tracking-wide">
								{formatToRupiah(data.price)} x {data.quantity}
							</span>
							<span className="text-sm font-medium tracking-wide text-color-accent">{data.discount}%</span>
						</div>
						<span className="text-sm font-medium tracking-wide">{formatToRupiah(data.totalPrice)}</span>
						<span className="text-sm font-normal tracking-wide text-color-tersier3">
							Tidak Pakai Sayuran
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvoiceCard;
