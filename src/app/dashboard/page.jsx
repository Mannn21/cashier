import ListCard from "@/components/Dashboard/ListCard";
import IncomeGraphic from "@/components/Dashboard/IncomeGraphic";
import OrderGraphic from "@/components/Dashboard/OrderGraphic";
import DashboardTable from "@/components/Dashboard/DashboardTable";

export default function Dashboard() {
	return (
		<div className="w-full h-auto p-2">
			<div className="w-full h-auto flex flex-col gap-2">
				<div className="w-full h-auto">
					<ListCard />
				</div>
				<div className="w-full h-auto flex flex-row gap-2">
					<div className="w-1/2 h-[300px] p-2 rounded-md shadow-xl bg-color-primer">
						<IncomeGraphic />
					</div>
					<div className="w-1/2 h-[300px] p-2 rounded-md shadow-xl bg-color-primer">
						<OrderGraphic />
					</div>
				</div>
				<div className="w-full h-auto p-2 flex flex-col justify-start items-center gap-4 mt-4 border-2 rounded-md">
					<h3 className="text-lg font-semibold tracking-wide">Penjualan Terbanyak Bulan Ini</h3>
					<DashboardTable />
				</div>
			</div>
		</div>
	);
}