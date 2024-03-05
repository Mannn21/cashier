"use client";

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setAddInventoryModal } from "@/features/modal/modalSlice";
import Swal from "sweetalert2";
import Modal from "@/components/Modal/Modal";
import InputImage from "./InputImage";
import { postMenus } from "@/services/postMenus";
import { getMenus } from "@/services/getMenuDatas";
import { setInventoryData } from "@/features/inventory/inventorySlice";

const InventoryModal = () => {
    const [image, setImage] = useState(null)
    const nameRef = useRef(null);
    const categoryRef = useRef(null)
    const priceRef = useRef(null)
    const discountRef = useRef(null)
    const stockRef = useRef(null)
    const detailsRef = useRef(null)
	const dispatch = useDispatch();

	const handleCloseInventoryModal = () => {
		dispatch(setAddInventoryModal(false));
	};

    const handleInventory = async () => {
        const datas = await getMenus();
        dispatch(setInventoryData(datas))
    }

    const handleImage = e => {
        setImage(e)
    }
    
    const handleAddInventory = async () => {
        const formData = new FormData();
        formData.append('name', nameRef.current.value);
        formData.append('price', priceRef.current.value);
        formData.append('discount', discountRef.current.value);
        formData.append('stock', stockRef.current.value);
        formData.append('details', detailsRef.current.value);
        formData.append('category', categoryRef.current.value);
        formData.append('image', image)
        Swal.fire({
			title: "Menunggu",
			text: "Sedang memproses pesanan...",
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});

		try {
			const response = await postMenus(formData, categoryRef.current.value);
			if (response.status === "Ok") {
                dispatch(setAddInventoryModal(false));
                handleInventory()
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
    }

	return (
		<Modal>
			<div className="w-screen h-auto flex justify-center items-center">
				<div className="w-1/2 bg-color-primer rounded-lg shadow-md h-[calc(100vh-40px)] overflow-auto">
					<div className="w-full h-auto p-4 flex flex-col gap-2 justify-start items-center">
						<div className="w-full h-auto flex flex-col justify-start items-center gap-2">
							<div className="w-full h-auto flex flex-col justify-start items-center gap-2">
                                <InputImage handleImage={handleImage} />
							</div>
							<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
								<label htmlFor="name">Nama Menu</label>
								<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
									<input
										type="text"
                                        ref={nameRef}
										placeholder="Masukkan nama menu..."
										className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
									/>
								</div>
							</div>
							<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
								<label htmlFor="category">Kategori Menu</label>
								<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
									<select ref={categoryRef} defaultValue="Pilih Kategori" className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none">
										<option value="Pilih Kategori" disabled>Pilih Kategori</option>
										<option value="foods">Makanan</option>
										<option value="drinks">Minuman</option>
									</select>
								</div>
							</div>
							<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
								<label htmlFor="price">Harga Menu</label>
								<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
									<input
										type="number"
                                        ref={priceRef}
										placeholder="Masukkan harga menu..."
										className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
									/>
								</div>
							</div>
							<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
								<label htmlFor="discount">Discount Menu</label>
								<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
									<input
										type="number"
                                        ref={discountRef}
										placeholder="Masukkan discount menu..."
										className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
									/>
								</div>
							</div>
							<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
								<label htmlFor="stock">Stock Menu</label>
								<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
									<input
										type="number"
                                        ref={stockRef}
										placeholder="Masukkan stock menu..."
										className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
									/>
								</div>
							</div>
							<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
								<label htmlFor="details">Detail Menu</label>
								<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
									<input
										type="text"
                                        ref={detailsRef}
										placeholder="Masukkan detail menu..."
										className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
									/>
								</div>
							</div>
						</div>
						<div className="w-full h-auto">
							<button
								type="button"
								onClick={handleCloseInventoryModal}
								className="w-auto h-auto text-center px-2 py-1 text-color-primer text-lg font-semibold bg-color-accent rounded-md hover:bg-color-accentHover transition-all ease-in-out duration-300">
								Batal
							</button>
							<button
								type="button"
								onClick={handleAddInventory}
								className="w-auto h-auto text-center px-2 py-1 text-color-primer text-lg font-semibold bg-color-secondary1 rounded-md hover:bg-color-secondary1hover transition-all ease-in-out duration-300">
								Kirim
							</button>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default InventoryModal;
