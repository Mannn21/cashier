import SearchInput from "@/components/OrderList/SearchInput";
import CardList from "@/components/OrderList/CardList";
import Navbar from "@/components/OrderList/Navbar";

export default function OrderList() {
	return (
		<div className="w-full h-full p-1">
			<div className="w-full h-full flex flex-row gap-3 justify-start items-start">
				<div className="w-3/4 h-full">
					<div className="w-full h-auto py-2 flex flex-row justify-between items-center">
						<span>Steps</span>
						<SearchInput />
					</div>
					<div className="w-full h-auto py-2 flex flex-col justify-start items-start gap-2">
						<span>Daftar Menu</span>
						<Navbar />
					</div>
					<div>
						<div>List Card Menu</div>
						<CardList />
					</div>
				</div>
                <div className="w-1/4 h-full">
                    <div>
                        <span>Order Lists</span>
                    </div>
                </div>
			</div>
		</div>
	);
}
