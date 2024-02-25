import CardData from "../CardData";
import { dashboardDisplayData } from "@/data/dashboardDisplayData";

const ListCard = () => {
	return (
		<div className="w-full h-auto p-2">
			<div className="w-full h-auto grid grid-cols-5 gap-x-8">
				{dashboardDisplayData?.map((data, index) => {
					return <CardData key={index} data={data} />;
				})}
			</div>
		</div>
	);
};

export default ListCard;
