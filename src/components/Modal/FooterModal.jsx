"use client";

import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
	setModal,
	setPaymentModal,
	getPaymentModalState,
} from "@/features/modal/modalSlice";
import { setMenus } from "@/features/menus/menusSlice";
import { clearCart } from "@/features/cart/cartSlice";
import { postOrderData } from "@/services/postOrderData";
import { getMenus } from "@/services/getMenuDatas";

const FooterModal = ({ data = null }) => {
	const dispatch = useDispatch();
	const paymentModalState = useSelector(getPaymentModalState);

	const handleModalState = () => {
		dispatch(setModal(false));
	};

	const handleMenus = async () => {
		const menus = await getMenus();
		dispatch(setMenus(menus));
	} 

	const handlePostOrder = async () => {
		Swal.fire({
			title: "Menunggu",
			text: "Sedang memproses pesanan...",
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});

		try {
			const response = await postOrderData(data);
			if (response.status === "Ok") {
				dispatch(setModal(false));
				dispatch(clearCart())
				handleMenus();
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

	const handlePaymentModal = () => {
		if (!paymentModalState) {
			dispatch(setPaymentModal(true));
		} else {
			handlePostOrder();
		}
	};

	return (
		<div className="w-full h-auto flex flex-row gap-4 justify-center items-center pt-3">
			<button
				type="button"
				onClick={handleModalState}
				className="w-auto h-auto text-center px-2 py-1 text-color-primer text-lg font-semibold bg-color-accent rounded-md hover:bg-color-accentHover transition-all ease-in-out duration-300">
				Batal
			</button>
			<button
				type="button"
				onClick={handlePaymentModal}
				className="w-auto h-auto text-center px-2 py-1 text-color-primer text-lg font-semibold bg-color-secondary1 rounded-md hover:bg-color-secondary1hover transition-all ease-in-out duration-300">
				Lanjut
			</button>
		</div>
	);
};

export default FooterModal;
