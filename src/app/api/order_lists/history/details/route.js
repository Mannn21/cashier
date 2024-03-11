import { NextResponse } from "next/server";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/app/firebase";

export const GET = async req => {
	const searchParams = req.nextUrl.searchParams;
	const query = searchParams.get("month");
	if (!query) {
		return NextResponse.json(
			{ message: "Mohon masukkan data dengan lengkap" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const getAllOrderLists = await getDocs(collection(db, "history"));
		const isDataEmpty = getAllOrderLists.empty;
		if (!isDataEmpty) {
			const responseData = [];
			getAllOrderLists.forEach(doc => {
				const id = doc.id;
				const data = doc.data();
				const month = data.date_order.split("-")[1];
				if(month === query) {
					responseData.push({
						id,
						cashier_name: data.cashier_name,
						total_item: data.total_item,
						total_price: data.total_price,
						date_order: data.date_order,
						month
					});
				}

			});
			const total_prices = responseData.reduce((accumulator, currentValue) => {
				return accumulator + currentValue.total_price;
			}, 0)
			const total_items = responseData.reduce((accumulator, currentValue) => {
				return accumulator + currentValue.total_item;
			}, 0)
			const response = {
				total_prices,
				total_items,
				total_taxes: total_items * 150,
				total_orders: responseData.length
			}
			return NextResponse.json(
				{ message: response },
				{ status: 200, statusText: "Ok" }
			);
		}
	} catch (error) {
		return NextResponse.json(
			{ message: "Kesalahan pada server" },
			{ status: 500, statusText: error }
		);
	}
};
