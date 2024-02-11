import { NextResponse } from "next/server";
import { doc, setDoc, getDoc, getDocs, collection, where, query } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"
import { db } from "@/app/firebase";

export const POST = async req => {
    const { orders, table_id, costumer_name, date, order_time, cashier_id, total_item, total_discount, total_payment, message } = await req.json();
    if(!orders, !table_id, !costumer_name, !date, !order_time, !cashier_id, !total_item, !total_payment) {
        return NextResponse.json(
            {message: "Harap lengkapi data input"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const cashierRef = doc(db, "employees", cashier_id);
        const searchCashier = await getDoc(cashierRef);
        return NextResponse.json(
            {message: searchCashier.data()},
            {status: 200, statusText: "Ok"}
        )

    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: "Internal Server Error"}
        )
    }
}