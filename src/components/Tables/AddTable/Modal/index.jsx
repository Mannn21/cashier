"use client";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { setAddTableModal } from "@/features/modal/modalSlice";
import { setTableDatas } from "@/features/table/tableSlice";
import Modal from "@/components/Modal/Modal";
import { postTable } from "@/services/tables";
import { getTables } from "@/services/tables";
import { sortDatas } from "@/utils/sortDatas";

const AddTableModal = () => {
	const dispatch = useDispatch();
	const nameRef = useRef(null);
	const categoryRef = useRef(null);
	const capacityRef = useRef(null);

	const handleCloseTableModal = () => {
		dispatch(setAddTableModal(false));
	};

	const handleTables = async () => {
		const datas = await getTables();
		const sortedTables = sortDatas(datas.message);
		dispatch(setTableDatas(sortedTables));
	};

	const handleSubmit = async () => {
		let category;
		if (categoryRef.current.value === "private") {
			category = "private";
		} else if (categoryRef.current.value === "public") {
			if (parseInt(capacityRef.current.value) === 1) {
				category = "personal";
			} else if (parseInt(capacityRef.current.value) === 2) {
				category = "couple";
			} else if (
				parseInt(capacityRef.current.value) > 2 &&
				parseInt(capacityRef.current.value) <= 8
			) {
				category = "family";
			} else {
				category = "party";
			}
		}
		const data = {
			name: nameRef.current.value,
			capacity: parseInt(capacityRef.current.value),
			category,
		};

		Swal.fire({
			title: "Menunggu",
			text: "Sedang memproses pesanan...",
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});

		try {
			const response = await postTable(data);
			if (response.status === "Ok") {
				dispatch(setAddTableModal(false));
				handleTables();
				Swal.fire({
					icon: "success",
					timer: 2000,
					timerProgressBar: true,
					title: "Sukses!",
					text: response.message,
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Ada kesalahan saat memproses pesanan.",
				});
			}
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Terjadi kesalahan saat memposting pesanan.",
			});
		}
	};

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
					<div>
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
