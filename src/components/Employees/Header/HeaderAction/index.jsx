import FilterAndSearch from "./FilterAndSearch";
import AddEmployee from "./AddEmployee";

const HeaderAction = () => {
	return (
		<div className="w-full h-auto p-2">
			<div className="w-full h-auto flex flex-row justify-between items-center">
				<div className="w-1/2 h-auto">
					<FilterAndSearch />
				</div>
				<div className="w-1/2 h-auto">
					<AddEmployee />
				</div>
			</div>
		</div>
	);
};

export default HeaderAction;
