"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "@/components/Modal";
import { getAllCarts } from "./cartSlice";
import ReviewModal from "@/components/ReviewModal";
import PaymentModal from "../payment/PaymentModal";

const CartModal = ({ handleCartModal }) => {
	const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);
	const carts = useSelector(getAllCarts);
	const { orders } = carts;

	const handlePaymentModal = () => {
		setIsOpenPaymentModal(!isOpenPaymentModal)
	};

	return (
		<Modal>
			<div className="w-screen h-full flex justify-center items-center">
				<div className="relative w-1/2 h-full p-3 bg-color-primer text-color-dark rounded-md flex flex-col justify-start items-center gap-4">
					<div className="w-full h-auto">
						{isOpenPaymentModal ? (
							<PaymentModal />
						) : (
							<ReviewModal orders={orders} />
						)}
					</div>
					<div className="w-full h-auto flex flex-row gap-4 justify-center items-center">
						<button
							type="button"
							onClick={handleCartModal}
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
				</div>
			</div>
		</Modal>
	);
};

export default CartModal;
