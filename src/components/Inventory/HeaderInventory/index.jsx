import AddInventory from "../AddInventory";
import NavbarInventory from "../NavbarInventory";

const HeaderInventory = () => {
	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
				<div className="w-full h-auto">
					<AddInventory />	
				</div>
				<div className="w-full h-auto">
					<NavbarInventory />
				</div>
			</div>
		</div>
	);
};

export default HeaderInventory;
