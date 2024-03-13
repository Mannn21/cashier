import ListCard from "@/components/Dashboard/ListCard";
import Graphics from "@/components/Dashboard/Graphics";
import DashboardTable from "@/components/Dashboard/DashboardTable";

export default function Dashboard() {
	return (
		<div className="w-full h-auto p-2">
			<div className="w-full h-auto flex flex-col gap-2">
				<div className="w-full h-auto">
					<ListCard />
				</div>
				<div className="w-full h-auto">
					<Graphics />
				</div>
				<div className="w-full h-auto">
					<DashboardTable />
				</div>
			</div>
		</div>
	);
}
