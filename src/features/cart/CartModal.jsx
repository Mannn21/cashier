"use client";

import { useSelector } from "react-redux";
import { getPaymentModalState } from "../modal/modalSlice";
import Modal from "@/components/Modal/Modal";
import ReviewModal from "@/components/Modal/ReviewModal";
import PaymentModal from "../payment/PaymentModal";
import HeaderModal from "@/components/Modal/HeaderModal";

const CartModal = () => {
	const isOpenPaymentModal = useSelector(getPaymentModalState)
	return (
		<Modal>
			<div className="w-full h-full bg-color-primer rounded-md p-3">
				<div className="w-full h-auto flex flex-col gap-3 justify-center items-center">
					<HeaderModal />
					<div className="w-full h-auto">
						{isOpenPaymentModal ? (
							<PaymentModal />
						) : (
							<ReviewModal />
						)}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default CartModal;
