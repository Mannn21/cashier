import Image from "next/image";

const Card = ({data}) => {
	return (
		<div className="h-auto m-2 p-3 flex flex-col gap-2 rounded-md shadow-xl bg-color-primer">
			<div className="w-full h-[180px] object-contain rounded-md overflow-hidden">
				<Image
					src={data.url}
					alt={data.imageName}
					width={300}
					height={300}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="w-full h-auto flex flex-col gap-1 justify-start items-center">
				<h3 className="text-lg font-semibold tracking-wide">{data.name}</h3>
				<span className="text-base font-medium text-color-tersier3 tracking-wide">
					{data.price}
				</span>
			</div>
			<div className="w-full h-auto flex flex-row justify-between items-center">
				<span>Stock: {data.stock}</span>
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
