import { NextResponse } from "next/server";
import {
	doc,
	setDoc,
	getDoc,
	getDocs,
	collection,
	updateDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/app/firebase";
import { currentTime } from "@/utils/currentTime";

export const GET = async req => {
	try {
		const getAllOrderLists = await getDocs(collection(db, "order_lists"));
		const isDataEmpty = getAllOrderLists.empty;

		if (!isDataEmpty) {
			let responseData = [];
			for (const order of getAllOrderLists.docs) {
				const data = order.data();

				const cashierRef = doc(db, "employees", data.cashier_id);
				const cashierDoc = await getDoc(cashierRef);
				const cashierData = cashierDoc.data();

				const tableRef = doc(db, "tables", data.table_id);
				const tableDoc = await getDoc(tableRef);
				const tableData = tableDoc.data();

				responseData.push({
					id: order.id,
					orders: data.orders,
					tableCategory: tableData.category,
					tableStatus: tableData.status,
					customerName: data.customer_name,
					dateOrder: data.date,
					timeOrder: data.order_time,
					timeFinish: data.finish_time,
					cashierName: cashierData.name,
					totalPrice: data.total_price,
					totalItem: data.total_item,
					totalDiscount: data.total_discount,
					totalPayment: data.total_payment,
					totalOrder: data.total_orders,
					status: data.status,
					totalReturn: data.total_return,
				});
			}
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

export const POST = async req => {
	const {
		orders,
		table_id,
		customer_name,
		date,
		cashier_id,
		total_price,
		total_item,
		total_orders,
		total_discount,
		total_payment,
	} = await req.json();
	if (
		!orders ||
		!table_id ||
		!customer_name ||
		!date ||
		!cashier_id ||
		total_item < 1 ||
		total_payment < 0 ||
		total_discount < 0 ||
		total_orders < 0 ||
		total_price < 0
	) {
		return NextResponse.json(
			{ message: "Harap lengkapi data input" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	if (total_payment < total_price) {
		return NextResponse.json(
			{ message: "Data pembayaran tidak mencukupi" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const cashierRef = doc(db, "employees", cashier_id);
		const searchCashier = await getDoc(cashierRef);
		if (!searchCashier.exists()) {
			return NextResponse.json(
				{ message: "Data kasir tidak ditemukan" },
				{ status: 404, statusText: "Not Found" }
			);
		}
		const tableRef = doc(db, "tables", table_id);
		const searchTable = await getDoc(tableRef);
		if (!searchTable.exists()) {
			return NextResponse.json(
				{ message: "Data meja tidak ditemukan" },
				{ status: 404, statusText: "Not Found" }
			);
		}
		if (searchTable.data().status) {
			return NextResponse.json(
				{ message: "Meja sedang digunakan" },
				{ status: 409, statusText: "Conflict" }
			);
		}
		let validation = true;
		let message = "";
		for (const order of orders) {
			const {
				id,
				name,
				category,
				price_order,
				discount_order,
				quantity,
				total_price,
			} = order;
			const productRef = doc(db, category, id);
			const searchProduct = await getDoc(productRef);
			const { price, stock, discount } = searchProduct.data();
			const discountedPrice = price - (discount / 100) * price;
			if (stock < quantity) {
				validation = false;
				message = `Jumlah produk ${name} tidak mencukupi`;
			}
			if (price !== price_order) {
				validation = false;
				message = `Harga ${name} tidak sesuai`;
				break;
			}
			if (discount !== discount_order) {
				validation = false;
				message = `Discount ${name} tidak sesuai`;
			}
			if (discountedPrice * quantity !== total_price) {
				validation = false;
				message = `Total harga ${name} tidak sesuai`;
				break;
			}
		}
		if (!validation || message !== "") {
			return NextResponse.json(
				{ message },
				{ status: 400, statusText: "Bad Request" }
			);
		}
		// Kelanjutan Logika Bisnis
		let totalDiscount = 0;
		let totalPriceBeforeDiscount = 0;
		for (const order of orders) {
			const { quantity, discount_order, price_order, total_price } = order;

			const discountAmount = (discount_order / 100) * price_order * quantity;
			totalDiscount += discountAmount;

			const priceBeforeDiscount = total_price + discountAmount;
			totalPriceBeforeDiscount += priceBeforeDiscount;
		}
		const finalPrice = (totalPriceBeforeDiscount - totalDiscount) + (total_item * 150) 
		if (totalDiscount !== total_discount || total_price !== finalPrice) {
			return NextResponse.json(
				{ message: "Total harga pesanan tidak sesuai" },
				{ status: 400, statusText: "Bad Request" }
			);
		}
		const time = currentTime();
		// MASALAHNYA GAK SESUAI DI ARRAY ORDERS
		for (const order of orders) {
			const {
				id,
				category,
				quantity,
				discount_order,
				price_order,
				total_price,
			} = order;
			const productRef = doc(db, category, id);
			const searchProduct = await getDoc(productRef);
			const stock = searchProduct.data().stock;
			await updateDoc(productRef, {
				stock: stock - quantity,
			});

			const discountAmount = (discount_order / 100) * price_order * quantity;
			totalDiscount += discountAmount;

			const priceBeforeDiscount = total_price + discountAmount;
			totalPriceBeforeDiscount += priceBeforeDiscount;
		}
		await updateDoc(tableRef, {
			status: true,
		});
		const total_return = total_payment - total_price;
		const id = uuidv4();
		const docRef = doc(db, "order_lists", id);
		await setDoc(docRef, {
			orders,
			table_id,
			customer_name,
			date,
			order_time: time,
			cashier_id,
			total_price,
			total_item,
			total_discount,
			total_orders,
			total_payment,
			status: false,
			total_return,
		});
		return NextResponse.json(
			{
				message: `Pesanan berhasil dibuat, total kembalian adalah Rp.${total_return}`,
				status: "Ok"
			},
			{ status: 201, statusText: "Created" }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Kesalahan pada server" },
			{ status: 500, statusText: "Internal Server Error" }
		);
	}
};
