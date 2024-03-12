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
				const data = doc.data();
				const month = data.date_order.split("-")[1];
				if (month === query) {
					responseData.push({
						orders: data.orders,
					});
				}
			});
			const groupedOrders = {};

			// Fungsi untuk mengelompokkan pesanan berdasarkan nama menu dan menambahkan jumlahnya
			responseData.forEach(({ orders }) => {
				orders.forEach(({ name, quantity, image_URI, category, price }) => {
					if (!groupedOrders[name]) {
						groupedOrders[name] = {
							name,
							quantity: 0,
							image_URI,
							category,
							price,
						};
					}
					groupedOrders[name].quantity += quantity;
				});
			});

			return NextResponse.json(
				{ message: groupedOrders },
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
