import { NextResponse } from "next/server";
import { doc, getDocs, getDoc, collection } from "firebase/firestore";
import { db } from "@/app/firebase";

export const GET = async req => {
	try {
		const getAllOrderLists = await getDocs(collection(db, "history"));
		const isDataEmpty = getAllOrderLists.empty;

		if (!isDataEmpty) {
			let responseData = [];
			getAllOrderLists.forEach(doc => {
				const id = doc.id;
				const data = doc.data();

				responseData.push({
					id,
					orders: data.orders,
					table_category: data.table_category,
					table_status: data.table_status,
					customer_name: data.customer_name,
					date_order: data.date_order,
					table_name: data.table_name,
					time_order: data.time_order,
					time_finish: data.time_finish,
					cashier_name: data.cashier_name,
					total_price: data.total_price,
					total_item: data.total_item,
					total_discount: data.total_discount,
					total_payment: data.total_payment,
					status: data.status,
					total_return: data.total_return,
				});
			});
			return NextResponse.json(
				{ message: responseData },
				{ status: 200, statusText: "Ok" }
			);
		}

		return NextResponse.json(
			{ message: "Data pesanan tidak tersedia" },
			{ status: 404, statusText: "Not Found" }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Kesalahan pada server" },
			{ status: 500, statusText: "Internal Server Error" }
		);
	}
};
