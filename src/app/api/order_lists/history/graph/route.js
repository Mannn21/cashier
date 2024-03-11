import { NextResponse } from "next/server";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/app/firebase";

export const GET = async req => {
	try {
		const today = new Date();

		const sevenDaysAgo = new Date(today);
		sevenDaysAgo.setDate(today.getDate() - 7);

		const formattedSevenDaysAgo = `${sevenDaysAgo.getFullYear()}-${
			sevenDaysAgo.getMonth() + 1
		}-${sevenDaysAgo.getDate()}`;

		const getAllOrderLists = await getDocs(collection(db, "history"));
		const isDataEmpty = getAllOrderLists.empty;
		if (!isDataEmpty) {
			const responseData = [];
			getAllOrderLists.forEach(doc => {
				const id = doc.id;
				const data = doc.data();
				const month = data.date_order.split(" ")[0];
				if (month >= formattedSevenDaysAgo) {
					responseData.push({
						id,
						cashier_name: data.cashier_name,
						date_order: data.date_order,
						total_item: data.total_item,
						total_price: data.total_price - (data.total_item * 150),
						formattedSevenDaysAgo,
						month,
					});
				}
			});

			const response = responseData.reduce((acc, data) => {
				const month = data.date_order.split(" ")[0];
				if (!acc[month]) {
					acc[month] = {
						cashier_name: data.cashier_name,
						date_order: data.date_order,
						total_price: 0,
						total_item: 0,
						total_taxes: 0,
						formattedSevenDaysAgo,
					};
				}
				acc[month].total_price += data.total_price;
				acc[month].total_item += data.total_item;
				acc[month].total_taxes += data.total_item * 150;
				return acc;
			}, {});

			return NextResponse.json(
				{ message: response },
				{ status: 200, statusText: "Ok" }
			);
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "Kesalahan pada server" },
			{ status: 500, statusText: error }
		);
	}
};
