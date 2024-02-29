"use client";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchInput = () => {
    const searchRef = useRef();
    const dispatch = useDispatch()

    const handleSearch = () => {
        const keyword = searchRef.current.value;
        
    }
    
	return (
		<div className="w-[280px] flex flex-row p-1 gap-1 rounded-md border border-color-tersier3 focus-within:border-color-secondary1 hover:border-color-secondary1hover">
			<div className="p-1">
				<Icon path={mdiMagnify} size={1} />
			</div>
			<input
				type="text"
                ref={searchRef}
                onChange={handleSearch}
				placeholder="Cari Menu...."
				className="w-full p-1 outline-none border-none text-base text-color-tersier3 tracking-wide"
			/>
		</div>
	);
};

export default SearchInput;
