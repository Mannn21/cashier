"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import EmptyMenus from "../EmptyMenus";
import { setMenus, getAllMenus } from "@/features/menus/menusSlice";
import {
	getFilterCategory,
	getFilterKeyword,
} from "@/features/filter/filterSlice";
import { getMenus } from "@/services/menus";

const CardList = () => {
	const [filteredMenus, setFilteredMenus] = useState([]);
	const dispatch = useDispatch();
	const allMenus = useSelector(getAllMenus);
	const category = useSelector(getFilterCategory);
	const keyword = useSelector(getFilterKeyword);

	useEffect(() => {
		const response = async () => {
			const menus = await getMenus();
			dispatch(setMenus(menus));
		}
		response()
	}, [dispatch]);

	useEffect(() => {
		const filteredData = allMenus.filter(menu => {
			return menu.name.toLowerCase().includes(keyword.toLowerCase());
		});
		if (keyword.length >= 2) {
			setFilteredMenus(filteredData);
		} else {
			setFilteredMenus(allMenus);
		}
	}, [allMenus, keyword, dispatch]);

	return (
		<div className="w-full h-full p-2">
			{filteredMenus.length < 1 ? (
				<div className="w-full h-full mt-10">
					<EmptyMenus />
				</div>
			) : (
				<div className="w-full h-full grid grid-cols-3 gap-3">
					{category === "all menus"
						? filteredMenus.map(data => <Card key={data.id} data={data} />)
						: filteredMenus.map(data =>
								data.category === category ? (
									<Card key={data.id} data={data} />
								) : null
						  )}
				</div>
			)}
		</div>
	);
};

export default CardList;
