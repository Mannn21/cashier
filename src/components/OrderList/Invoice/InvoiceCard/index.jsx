"use client"

import Image from "next/image";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "@/features/cart/cartSlice";
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { formatToRupiah } from "@/utils/formatToRupiah";

const InvoiceCard = ({data}) => {
	const dispatch = useDispatch()

	const handleDeleteFromCart = data => {
		dispatch(deleteFromCart(data))
	}
	
	return (
		<div className="w-full h-[100px] p-1 bg-color-primary relative">
			<div className="w-full h-full flex flex-row gap-2">
				<div className="w-[100px] h-full object-contain rounded-md overflow-hidden">
					<Image
						src={data.image_URI}
						alt="image"
						width={200}
						height={200}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="w-[calc(100% - 94px)] h-full flex flex-row justify-between items-center">
					<div className="w-full h-full flex flex-col justify-around items-start">
						<h2 className="text-lg font-semibold tracking-wide">{data.name}</h2>
						<div className="w-full h-auto flex flex-row justify-between items-center">
							<span className="text-sm font-medium tracking-wide">
								{formatToRupiah(data.price_order)} x {data.quantity}
							</span>
							<span className="text-sm font-medium tracking-wide text-color-accent">{data.total_discount}%</span>
						</div>
						<span className="text-sm font-medium tracking-wide">{formatToRupiah(data.total_price)}</span>
						<span className="text-sm font-normal tracking-wide text-color-tersier3">
							Tidak Pakai Sayuran
						</span>
					</div>
				</div>
			</div>
			<div type="button" onClick={() => handleDeleteFromCart(data)} className="w-auto h-auto p-2 flex justify-center items-center border rounded-full cursor-pointer text-color-primer bg-color-accent transition-all duration-300 ease-in-out hover:bg-color-accentHover absolute -top-1 left-0">
				<Icon path={mdiClose} size={0.7} />
			</div>
		</div>
	);
};

export default InvoiceCard;
