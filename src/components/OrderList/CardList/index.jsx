"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { setMenus, getAllMenus } from "@/features/menus/menusSlice";
import { getFilterCategory } from "@/features/filter/filterSlice";

const CardList = ({ foods, drinks }) => {
	const dispatch = useDispatch();
	const allMenus = useSelector(getAllMenus);
	const category = useSelector(getFilterCategory);

	useEffect(() => {
		const menus = [];
		foods.map(data => {
			menus.push(data);
		});
		drinks.map(data => {
			menus.push(data);
		});

		dispatch(setMenus(menus));
	}, [dispatch, drinks, foods]);

	return (
		<div className="grid grid-cols-3 gap-3">
			{category === "all menus"
				? allMenus.map(data => <Card key={data.id} data={data} />)
				: allMenus.map(data =>
						data.category === category ? (
							<Card key={data.id} data={data} />
						) : null
				  )}
		</div>
	);
};

export default CardList;
