"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import AddTableModal from "./Modal";
import {
	setAddTableModal,
	getAddTableModal,
} from "@/features/modal/modalSlice";

const AddTable = () => {
	const [elementPortal, setElementPortal] = useState(null)
	const dispatch = useDispatch();
	const isOpenAddTableModal = useSelector(getAddTableModal);

	useEffect(() => {
		setElementPortal(document.getElementById("modal"));
	}, [])
	
	const handleAddTableModal = () => {
		dispatch(setAddTableModal(true))
	}

	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto p-2 flex flex-row justify-between items-center">
				<div className="w-1/2 h-auto flex flex-row justify-start items-center">
					<h1>Total Meja (28)</h1>
				</div>
				<div className="w-1/2 h-auto flex flex-row justify-end items-center">
					<button type="button" onClick={handleAddTableModal} className="flex flex-row justify-start items-center gap-1 p-2 rounded-md bg-color-secondary2 text-color-primer font-semibold tracking-wide hover:bg-color-secondary2hover ease-in-out duration-300 transition-all">
						<Icon path={mdiPlus} size={1} />
						Tambah Meja
					</button>
				</div>
			</div>
			{
				isOpenAddTableModal ? createPortal(<AddTableModal />, elementPortal) : null
			}
		</div>
	);
};

export default AddTable;
