"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "@/components/Modal/Modal";
import { getAllCarts } from "./cartSlice";
import ReviewModal from "@/components/Modal/ReviewModal";
import PaymentModal from "../payment/PaymentModal";
import HeaderModal from "@/components/Modal/HeaderModal";
import FooterModal from "@/components/Modal/FooterModal";

const CartModal = ({ handleCartModal }) => {
	const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);
	const carts = useSelector(getAllCarts);
	const { orders, total_discount, total_items, total_price, total_orders } = carts;

	const handlePaymentModal = () => {
		setIsOpenPaymentModal(!isOpenPaymentModal);
	};

	return (
		<Modal>
			<div className="w-full h-full bg-color-primer rounded-md p-3">
				<div className="w-full h-auto flex flex-col gap-3 justify-center items-center">
					<HeaderModal />
					<div className="w-full h-auto">
						{isOpenPaymentModal ? (
							<PaymentModal />
						) : (
							<ReviewModal orders={orders} totalDiscount={total_discount} totalItems={total_items} totalPrice={total_price} totalOrders={total_orders} />
						)}
					</div>
					<FooterModal
						handleCartModal={handleCartModal}
						handlePaymentModal={handlePaymentModal}
					/>
				</div>
			</div>
		</Modal>
	);
};

export default CartModal;
