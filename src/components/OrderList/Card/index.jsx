import Image from "next/image";

const Card = () => {
	return (
		<div className="h-auto m-2 p-3 flex flex-col gap-2 rounded-md border border-color-tersier3 shadow-xl">
			<div className="w-full h-[180px] object-contain rounded-md overflow-hidden">
				<Image
					src="https://placehold.jp/300x300.png"
					alt="image"
					width={300}
					height={300}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="w-full h-auto flex flex-col gap-1 justify-start items-center">
				<h3 className="text-lg font-semibold tracking-wide">Nasi Goreng</h3>
				<span className="text-base font-medium text-color-tersier3 tracking-wide">
					Rp. 20.000
				</span>
			</div>
			<div className="w-full h-auto flex flex-row justify-between items-center">
				<span>Stock: 3</span>
				<button
					type="button"
					className="px-6 py-1 rounded-full bg-color-secondary1 text-color-primer text-base font-medium tracking-wide hover:bg-color-secondary1hover transition-all duration-300 ease-in-out">
					Order
				</button>
			</div>
		</div>
	);
};

export default Card;
