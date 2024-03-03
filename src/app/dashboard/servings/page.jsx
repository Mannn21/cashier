import HeaderServings from "@/components/Servings/HeaderServings";
import ServingsTable from "@/components/Servings/ServingsTable";

export default function Servings() {
	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto flex flex-col gap-3 justify-start items-center">
				<HeaderServings />
				<div className="w-full h-auto px-2">
                    <ServingsTable />
                </div>
			</div>
		</div>
	);
}
