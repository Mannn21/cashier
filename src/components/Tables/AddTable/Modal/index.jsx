"use client";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setAddTableModal } from "@/features/modal/modalSlice";
import Modal from "@/components/Modal/Modal";
import { handlePostTable } from "@/services/handlePostTable";

const AddTableModal = () => {
	const dispatch = useDispatch();
	const nameRef = useRef(null);
	const categoryRef = useRef(null);
	const capacityRef = useRef(null);

	const handleCloseTableModal = () => {
		dispatch(setAddTableModal(false));
	};

	const handleSubmit = () => {
		handlePostTable(dispatch, categoryRef, capacityRef, nameRef)
	}

	return (
		<Modal>
			<div className="w-screen h-auto flex flex-row justify-center items-center">
				<div className="w-1/2 h-auto bg-color-primer rounded-lg p-3 shadow-md overflow-auto flex flex-col justify-start items-center gap-3">
					<div className="w-full h-auto flex flex-col gap-3 justify-start items-center">
						<div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
							<label htmlFor="name">Nama Meja</label>
							<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
								<input
									type="text"
									placeholder="Masukkan nama meja..."
									className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
									ref={nameRef}
								/>
							</div>
						</div>
						<div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
							<label htmlFor="Capacity">Kapasitas Meja</label>
							<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
								<input
									type="number"
									placeholder="Masukkan kapasitas meja..."
									className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
									ref={capacityRef}
								/>
							</div>
						</div>
						<div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
							<label htmlFor="category">Kategori Meja</label>
							<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
								<select
									ref={categoryRef}
									defaultValue="Pilih Kategori"
									className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none">
									<option value="Pilih Kategori" disabled>
										Pilih Kategori
									</option>
									<option value="public">Publik</option>
									<option value="private">Private</option>
								</select>
							</div>
						</div>
					</div>
					<div className="w-full h-auto flex flex-row justify-center items-center gap-4 mt-3">
						<button
							type="button"
							onClick={handleCloseTableModal}
							className="w-auto h-auto text-center px-2 py-1 text-color-primer text-lg font-semibold bg-color-accent rounded-md hover:bg-color-accentHover transition-all ease-in-out duration-300">
							Batal
						</button>
						<button
							type="button"
							onClick={handleSubmit}
							className="w-auto h-auto text-center px-2 py-1 text-color-primer text-lg font-semibold bg-color-secondary1 rounded-md hover:bg-color-secondary1hover transition-all ease-in-out duration-300">
							Kirim
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default AddTableModal;
