import { NextResponse } from "next/server";
import { doc, setDoc, getDoc, getDocs, collection, where, query } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"
import { db } from "@/app/firebase";

export const POST = async req => {
    const { orders, table_id, customer_name, date, order_time, cashier_id, total_price, total_item, total_discount, total_payment, message } = await req.json();
    if(!orders || !table_id || !customer_name || !date || !order_time || !cashier_id || total_item < 1 || total_payment < 0 || total_price < 0) {
        return NextResponse.json(
            {message: "Harap lengkapi data input"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    if(total_payment < total_price) {
        return NextResponse.json(
            {message: "Data pembayaran tidak mencukupi"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const cashierRef = doc(db, "employees", cashier_id);
        const searchCashier = await getDoc(cashierRef);
        if(!searchCashier.exists()) {
            return NextResponse.json(
                {message: "Data kasir tidak ditemukan"},
                {status: 404, statusText: "Not Found"}
            )
        }
        const tableRef = doc(db, "tables", table_id);
        const searchTable = await getDoc(tableRef);
        if(!searchTable.exists()) {
            return NextResponse.json(
                {message: "Data meja tidak ditemukan"},
                {status: 404, statusText: "Not Found"}
            )
        }
        if(searchTable.data().status) {
            return NextResponse.json(
                {message: "Meja sedang digunakan"},
                {status: 409, statusText: "Conflict"}
            )
        }
        let validation = true;
        let message = ""
        for (const order of orders) {
            const { id, name, category, price_order, discount_order, quantity, total_price } = order;
            const productRef = doc(db, category, id); 
            const searchProduct = await getDoc(productRef);
            const { price, stock, discount } = searchProduct.data();
            const discountedPrice = price - (discount / 100 * price);
            if(stock < quantity) {
                validation = false;
                message = `Jumlah produk ${name} tidak mencukupi`
            }
            if (price !== price_order) {
                validation = false;
                message = `Harga ${name} tidak sesuai`;
                break;
            }
            if(discount !== discount_order) {
                validation = false;
                message = `Discount ${name} tidak sesuai`
            }
            if (discountedPrice * quantity !== total_price) {
                validation = false;
                message = `Total harga ${name} tidak sesuai`;
                break;
            } 
        }
        if(!validation || message !== "") {
            return NextResponse.json(
                {message},
                {status: 400, statusText: "Bad Request"}
            )
        }
        // Kelanjutan Logika Bisnis
        // const id = uuidv4();
        // const docRef = doc(db, "order_lists", id)
        // await setDoc(docRef, {

        // })
        return NextResponse.json(
            {message: searchTable.data()},
            {status: 200, statusText: "Ok"}
        )

    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: "Internal Server Error"}
        )
    }
}