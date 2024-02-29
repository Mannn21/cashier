"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiPlus, mdiMinus } from "@mdi/js";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	getAllCarts,
	removeFromCart,
} from "@/features/cart/cartSlice";
import { formatToRupiah } from "@/utils/formatToRupiah";

const QuantityButton = ({ quantity, handleAddCart, handleRemoveCart }) => {
	return (
		<div className="w-1/2 h-auto p-2">
			<div className="w-full h-full flex flex-row gap-3 justify-end items-center">
				<button
					onClick={handleRemoveCart}
					className="p-1 text-color-primer  bg-color-secondary1 rounded-full hover:bg-color-secondary1hover transition-all duration-300 ease-in-out"
					type="button">
					<Icon path={mdiMinus} size={1} />
				</button>
				<span>{quantity}</span>
				<button
					onClick={handleAddCart}
					className="p-1 text-color-primer bg-color-secondary1 rounded-full hover:bg-color-secondary1hover transition-all duration-300 ease-in-out"
					type="button">
					<Icon path={mdiPlus} size={1} />
				</button>
			</div>
		</div>
	);
};

const Card = ({ data }) => {
	const [isInCart, setIsInCart] = useState(false);
	const dispatch = useDispatch();
	const carts = useSelector(getAllCarts);

	const getQuantityInCart = () => {
		const itemInCart = carts.orders.find(item => item.id === data.id);
		return itemInCart ? itemInCart.quantity : 0;
	};

	useEffect(() => {
		const isInCart = carts.orders.some(item => item.id === data.id);
		setIsInCart(isInCart);
	}, [carts.orders, data.id]);

	const handleAddCart = () => {
		dispatch(addToCart(data));
	};

	const handleRemoveCart = () => {
		dispatch(removeFromCart(data));
	};

	return (
		<div className="h-auto m-2 p-3 flex flex-col gap-2 rounded-md shadow-xl bg-color-primer">
			<div className="w-full h-[180px] object-contain rounded-md overflow-hidden">
				<Image
					src={data.image_URI}
					alt={data.image_name}
					width={300}
					height={300}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="w-full h-auto flex flex-col gap-1 justify-start items-center">
				<h3 className="text-lg font-semibold tracking-wide">{data.name}</h3>
				<span className="text-base font-medium text-color-tersier3 tracking-wide">
					{formatToRupiah(data.price)}
				</span>
			</div>
			<div className="w-full h-auto flex flex-row justify-between items-center">
				<span>Stock: {data.stock}</span>
				{isInCart ? (
					<QuantityButton
						quantity={getQuantityInCart()}
						handleAddCart={handleAddCart}
						handleRemoveCart={handleRemoveCart}
					/>
				) : (
					<button
						type="button"
						onClick={handleAddCart}
						className="px-6 py-1 rounded-full bg-color-secondary1 text-color-primer text-base font-medium tracking-wide hover:bg-color-secondary1hover transition-all duration-300 ease-in-out">
						Order
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
