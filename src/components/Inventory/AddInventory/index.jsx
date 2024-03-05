"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	setAddInventoryModal,
	getAddInventoryModal,
} from "@/features/modal/modalSlice";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import InventoryModal from "./Modal";

const AddInventory = () => {
	const [portalElement, setPortalElement] = useState(null);
	const dispatch = useDispatch();
	const isOpenModal = useSelector(getAddInventoryModal);

	useEffect(() => {
		setPortalElement(document.getElementById("modal"));
	}, []);

	const handleAddInventory = () => {
		dispatch(setAddInventoryModal(true));
	};

	return (
		<div className="w-full h-auto">
			<div className="w-full h-auto p-2 flex flex-row justify-between items-center">
				<div className="w-1/2 h-auto flex flex-row justify-start items-center">
					<h1>Semua Produk (20)</h1>
				</div>
				<div className="w-1/2 h-auto flex flex-row justify-end items-center">
					<button
						type="button"
						onClick={handleAddInventory}
						className="flex flex-row justify-start items-center gap-1 p-2 rounded-md bg-color-secondary2 text-color-primer font-semibold tracking-wide hover:bg-color-secondary2hover ease-in-out duration-300 transition-all">
						<Icon path={mdiPlus} size={1} />
						Tambah Produk
					</button>
				</div>
			</div>
			{isOpenModal ? createPortal(<InventoryModal />, portalElement) : null}
		</div>
	);
};

export default AddInventory;
