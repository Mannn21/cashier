"use client";

import { useDispatch, useSelector } from "react-redux";
import Icon from "@mdi/react";
import { navbarTableData } from "@/data/navbarTableData";
import { setFilterTableId, getFilterTableId } from "@/features/table/tableSlice";

const NavbarTable = () => {
	const dispatch = useDispatch();
	const id = useSelector(getFilterTableId);

	const handleId = id => {
		dispatch(setFilterTableId(id));
	};

	return (
		<div className="w-full">
			<div className="w-full h-auto flex flex-row justify-start items-center p-2">
				<div className="w-2/3 h-auto flex flex-row justify-around items-center">
					{navbarTableData.map((data, index) => {
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
				<div className="w-1/3 h-auto flex flex-row justify-end items-center">
					<select id="status" defaultValue="--- Pilih Status ---" className="px-4 py-2 cursor-pointer border hover:border-color-secondary1 hover:outline-color-secondary1">
						<option disabled value="--- Pilih Status ---">
							--- Pilih Status ---
						</option>
						<option value="all" className="text-base font-semibold my-2">Semua</option>
						<option value="0" className="text-base font-semibold my-2">Tersedia</option>
						<option value="1" className="text-base font-semibold my-2">Tidak Tersedia</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default NavbarTable;
