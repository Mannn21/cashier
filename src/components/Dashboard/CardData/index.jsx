import Icon from "@mdi/react";

const CardData = ({ data, details }) => {

	return (
		<div className="w-full h-auto p-2 rounded-md bg-color-secondary1 shadow-xl">
			<div className="w-full h-auto flex flex-col gap-3 p-2">
				<div className="w-[60px] h-[60px] p-2 rounded-full flex justify-center items-center bg-color-primer text-color-dark shadow-md border border-color-tersier1">
					<Icon path={data.icon} size={2} />
				</div>
				<div className="w-full h-auto mt-4 p-2">
					<div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
						<span className="text-base font-semibold tracking-wide">
							{data.title}
						</span>
						<h4 className="text-xl font-semibold tracking-wide">{details.value}</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardData;
