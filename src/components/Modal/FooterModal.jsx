"use client";

import { useDispatch, useSelector } from "react-redux";
import {
	setCheckOutModal,
	setPaymentModal,
	getPaymentModalState,
} from "@/features/modal/modalSlice";
import { handlePostOrder } from "@/services/handlePostOrder";
const FooterModal = ({ data = null }) => {
	const dispatch = useDispatch();
	const paymentModalState = useSelector(getPaymentModalState);

	const handleModalState = () => {
		dispatch(setCheckOutModal(false));
	};

	const handleSubmit = () => {
		handlePostOrder(data, dispatch)
	}

	const handlePaymentModal = () => {
		if (!paymentModalState) {
			dispatch(setPaymentModal(true));
		} else {
			handleSubmit();
		}
	};

	return (
		<div className="w-full h-auto flex flex-row gap-4 justify-center items-center pt-5">
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
