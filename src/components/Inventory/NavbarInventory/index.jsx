import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import DropdownFilter from "../DropdownFilter";

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
					<div className="w-[280px] flex flex-row p-1 gap-1 rounded-md border border-color-tersier3 focus-within:border-color-secondary1 hover:border-color-secondary1hover">
						<div className="p-1">
							<Icon path={mdiMagnify} size={1} />
						</div>
						<input
							type="text"
							placeholder="Cari Produk...."
							className="w-full p-1 outline-none border-none text-base text-color-tersier3 tracking-wide"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavbarInventory;
