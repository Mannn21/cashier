"use client";

import { useDispatch, useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { navbarData } from "@/data/navbarData";
import {
	setFilterInventoryId,
	getFilterInventoryId,
} from "@/features/inventory/inventorySlice";

const NavbarInventory = () => {
	const dispatch = useDispatch();
	const id = useSelector(getFilterInventoryId);

	const handleId = id => {
		dispatch(setFilterInventoryId(id));
	};

	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto p-2 flex flex-row justify-between items-center">
				<div className="w-[calc(100% - 300px)] h-auto">
					<div className="w-full h-auto flex flex-row justify-around items-center">
						{navbarData.map((data, index) => {
							return (
								<div
									key={index}
									className={`px-3 py-1 flex flex-row justify-center items-center gap-1 cursor-pointer rounded-full hover:text-color-primer hover:bg-color-secondary1 ease-in-out duration-300 transition-all ${
										id === data.id
											? "text-color-primer bg-color-secondary1"
											: "text-color-tersier3"
									}`}
									onClick={() => handleId(data.id)}>
									<div>
										<Icon path={data.icon} size={0.95} />
									</div>
									<span className="text-base font-semibold tracking-wide">
										{data.title}
									</span>
								</div>
							);
						})}
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
