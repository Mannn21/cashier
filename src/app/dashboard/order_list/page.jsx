import SearchInput from "@/components/OrderList/SearchInput";
import CardList from "@/components/OrderList/CardList";
import Navbar from "@/components/OrderList/Navbar";
import Invoice from "@/components/OrderList/Invoice";
import { getFoods, getDrinks } from "@/services/getMenuDatas";

export default async function OrderList() {
	const foodsResponse = await getFoods();
	const drinksResponse = await getDrinks();

	const foods = foodsResponse.message;
	const drinks = drinksResponse.message;

    
	return (
		<div className="w-full h-full p-1">
			<div className="w-full h-full flex flex-row gap-3 justify-start items-start">
				<div className="w-3/4 h-full">
					<div className="w-full h-auto py-2 flex flex-row justify-between items-center">
						<span className="text-xl font-semibold tracking-wide text-color-tersier3">Total Menu: 20</span>
						<SearchInput />
					</div>
					<div className="w-full h-auto py-2 flex flex-col justify-start items-start gap-2">
						<Navbar />
					</div>
					<div>
						<CardList foods={foods} drinks={drinks} />
					</div>
				</div>
                <div className="w-1/4 h-full">
                    <Invoice />
                </div>
			</div>
		</div>
	);
}
