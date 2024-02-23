import Image from "next/image";

const InvoiceCard = () => {
	return (
		<div className="w-full h-[90px] p-1 bg-color-primary">
			<div className="w-full h-full flex flex-row gap-2">
				<div className="w-[90px] h-full object-contain rounded-md overflow-hidden">
					<Image
						src="https://placehold.jp/200x200.png"
						alt="image"
						width={200}
						height={200}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="w-[calc(100% - 94px)] h-full flex flex-row justify-between items-center">
					<div className="w-full h-full flex flex-col justify-around items-start">
						<h2 className="text-lg font-semibold tracking-wide">Nasi Goreng</h2>
						<span className="text-sm font-medium tracking-wide">
							Rp 20.000 x 2
						</span>
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
