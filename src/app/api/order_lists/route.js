import { NextResponse } from "next/server";
import { doc, setDoc, getDocs, collection, where, query } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"
import { db } from "@/app/firebase";

export const POST = async req => {
    const { orders, total_price, table_id, costumer_name, date, order_time, cashier_id, total_item, total_discount, total_payment, message } = await req.json();
    if(!orders, total_price, table_id, costumer_name, date, order_time, cashier_id, total_item, total_discount, total_payment, message) {
        return NextResponse.json(
            {message: "Harap lengkapi data input"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const id = uuidv4();
        
    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: "Internal Server Error"}
        )
    }
}