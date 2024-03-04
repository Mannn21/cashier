"use client"

import {useDispatch} from "react-redux";
import { setKeyword } from "@/features/inventory/inventorySlice";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchInventory = () => {
    const dispatch = useDispatch();

    const handleSearch = e => {
        dispatch(setKeyword(e.target.value));
    }
    
	return (
		<div className="w-[280px] flex flex-row p-1 gap-1 rounded-md border border-color-tersier3 focus-within:border-color-secondary1 hover:border-color-secondary1hover">
			<div className="p-1">
				<Icon path={mdiMagnify} size={1} />
			</div>
			<input
				type="text"
                onChange={e => handleSearch(e)}
				placeholder="Cari Produk...."
				className="w-full p-1 outline-none border-none text-base text-color-tersier3 tracking-wide"
			/>
		</div>
	);
};

export default SearchInventory;
