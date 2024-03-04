"use client";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
	setCategoryFilter,
	setDiscountSort,
	setPriceSort,
	setStockSort,
} from "@/features/inventory/inventorySlice";

const Dropdown = ({handleFilter}) => {
	const dispatch = useDispatch();
	const categoryRef = useRef()
	const priceRef = useRef()
	const discountRef = useRef()
	const stockRef = useRef()

	const handleDropdown = () => {
		handleFilter()
		dispatch(setCategoryFilter(categoryRef.current.value))
		dispatch(setDiscountSort(discountRef.current.value))
		dispatch(setPriceSort(priceRef.current.value))
		dispatch(setStockSort(stockRef.current.value))
	}
	
	return (
		<div className="w-[250px] h-auto p-2 dropdown bg-color-primer">
			<div className="w-full h-auto p-2">
				<div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
					<div className="w-full h-auto text-center">
						<h3 className="text-lg font-semibold tracking-wide">Filter Data</h3>
					</div>
					<div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
						<div className="w-full flex flex-col gap-2">
							<label htmlFor="category" className="font-semibold tracking-wide">
								Kategori
							</label>
							<select id="category" ref={categoryRef}>
								<option value="semua">Semua Menu</option>
								<option value="foods">Makanan</option>
								<option value="drinks">Minuman</option>
								<option value="noodles and pasta">Mie dan Pasta</option>
								<option value="meals">Cemilan</option>
							</select>
						</div>
						<div className="w-full flex flex-col gap-2">
							<label htmlFor="price" className="font-semibold tracking-wide">
								Harga
							</label>
							<select id="price" ref={priceRef}>
								<option value="default">Default</option>
								<option value="down">Tertinggi - Terendah</option>
								<option value="up">Terendah - Tertinggi</option>
							</select>
						</div>
						<div className="w-full flex flex-col gap-2">
							<label htmlFor="stock" className="font-semibold tracking-wide">
								Stock
							</label>
							<select id="stock" ref={stockRef} >
								<option value="default">Default</option>
								<option value="down">Terbesar - Terkecil</option>
								<option value="up">Terkecil - Terbesar</option>
							</select>
						</div>
						<div className="w-full flex flex-col gap-2">
							<label htmlFor="discount" className="font-semibold tracking-wide">
								Diskon
							</label>
							<select id="discount" ref={discountRef}>
								<option value="default">Default</option>
								<option value="down">Tertinggi - Terendah</option>
								<option value="up">Tertinggi - Terendah</option>
							</select>
						</div>
					</div>
					<div className="w-full h-auto flex flex-row gap-3 justify-end items-center">
						<button className="px-2 py-1 bg-color-accent rounded-md text-sm font-semibold text-color-primer hover:bg-color-accentHover ease-in-out duration-300 transition-all">
							Reset
						</button>
						<button type="button" onClick={handleDropdown} className="px-2 py-1 bg-color-secondary1 rounded-md text-sm font-semibold text-color-primer hover:bg-color-secondary1hover ease-in-out duration-300 transition-all">
							Simpan
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
