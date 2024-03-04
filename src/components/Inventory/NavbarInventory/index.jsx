import DropdownFilter from "../DropdownFilter";
import SearchInventory from "../SearchInventory";

const NavbarInventory = () => {
	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto p-2 flex flex-row justify-between items-center">
				<div className="w-[calc(100% - 300px)] h-auto">
					<div className="w-full h-auto flex flex-row justify-around items-center">
						<DropdownFilter />	
					</div>
				</div>
				<div className="w-[300px] h-auto flex flex-row justify-end items-center">
					<SearchInventory />
				</div>
			</div>
		</div>
	);
};

export default NavbarInventory;
