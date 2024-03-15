import { NextResponse } from "next/server";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/app/firebase";
import { getDaysFormatted } from "@/utils/getDaysFormatted";

export const GET = async req => {
	try {
		const today = new Date();

		const sevenDaysAgo = new Date(today);
		sevenDaysAgo.setDate(today.getDate() - 7);

		const getAllOrderLists = await getDocs(collection(db, "history"));
		const isDataEmpty = getAllOrderLists.empty;
		if (!isDataEmpty) {
			const responseData = [];
			getAllOrderLists.forEach(doc => {
				const id = doc.id;
				const data = doc.data();
				const month = data.date_order.split(" ")[0];
				const dateFromDatabase = new Date(data.date_order);
				if (dateFromDatabase >= sevenDaysAgo) {
					responseData.push({
						id,
						date_order: month,
						total_item: data.total_item,
						total_price: data.total_price - data.total_item * 150,
					});
				}
			});

			responseData.reverse();

			const response = responseData.reduce((acc, data) => {
				const { date_order, total_price, total_item } = data;

				if (!acc[date_order]) {
					acc[date_order] = {
						days: getDaysFormatted(date_order),
						total_price: 0,
						total_item: 0,
						total_taxes: 0,
					};
				}

				acc[date_order].total_price += total_price;
				acc[date_order].total_item += total_item;
				acc[date_order].total_taxes += total_item * 150;

				return acc;
			}, {});

			const sortedKeys = Object.keys(response).sort(
				(a, b) => new Date(a) - new Date(b)
			);

			const sortedResponse = {};
			sortedKeys.forEach(key => {
				sortedResponse[key] = response[key];
			});

			const message = Object.values(sortedResponse);

			return NextResponse.json({ message }, { status: 200, statusText: "Ok" });
		}
	} catch (error) {
		return NextResponse.json(
			{ message: "Kesalahan pada server" },
			{ status: 500, statusText: error }
		);
	}
};
