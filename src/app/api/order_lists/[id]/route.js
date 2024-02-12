import { NextResponse } from "next/server";
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { currentTime } from "@/lib/currentTime";

export const GET = async (req, { params }) => {
    const { id } = await params;
    if(!id) {
        return NextResponse.json(
            {message: "Mohon lengkapi data input"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const orderRef = doc(db, "order_lists", id)
        const searchOrder = await getDoc(orderRef);
        const cashierRef = doc(db, "employees", searchOrder.data().cashier_id)
        const tableRef = doc(db, "tables", searchOrder.data().table_id)
        const searchCashier = await getDoc(cashierRef);
        const searchTable = await getDoc(tableRef)
        if(searchOrder.exists()) {
            const data = searchOrder.data();
            const cashier = searchCashier.data();
            const table = searchTable.data();
            const response = {
                id: searchOrder.id,
                orders: data.orders,
                tableCategory: table.category,
                customerName: data.customer_name,
                dateOrder: data.date,
                timeOrder: data.order_time,
                timeFinish: data.finish_time,
                cashierName: cashier.name,
                totalPrice: data.total_price,
                totalItem: data.total_item,
                totalDiscount: data.total_discount,
                totalPayment: data.total_payment,
                status: data.status,
                totalReturn: data.total_return
            }
            return NextResponse.json(
                {message: response},
                {status: 200, statusText: "Ok"}
            )
        }
        return NextResponse.json(
            {message: "Data pesanan tidak ditemukan"},
            {status: 404, statusText: "Not Found"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: error}
        )
    }
}

export const PUT = async (req, {params}) => {
    const { id } = await params;
    if(!id) {
        return NextResponse.json(
            {message: "Mohon lengkapi data input"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const orderRef = doc(db, "order_lists", id)
        const searchOrder = await getDoc(orderRef);
        const cashierRef = doc(db, "employees", searchOrder.data().cashier_id)
        const tableRef = doc(db, "tables", searchOrder.data().table_id)
        const searchCashier = await getDoc(cashierRef);
        const searchTable = await getDoc(tableRef)
        if(searchOrder.exists()) {
            const time = currentTime();
            await updateDoc(orderRef, {
                finish_time: time,
                status: true
            })
            const data = searchOrder.data()
            const cashier = searchCashier.data()
            const table = searchTable.data()
            const historyRef = doc(db, "history", searchOrder.id);
            await setDoc(historyRef, {
                orders: data.orders,
                tableCategory: table.category,
                customerName: data.customer_name,
                dateOrder: data.date,
                timeOrder: data.order_time,
                timeFinish: data.finish_time,
                cashierName: cashier.name,
                totalPrice: data.total_price,
                totalItem: data.total_item,
                totalDiscount: data.total_discount,
                totalPayment: data.total_payment,
                status: data.status,
                totalReturn: data.total_return
            })
            return NextResponse.json(
                {message: "Pesanan telah dihidangkan"},
                {status: 200, statusText: "Ok"}
            )
        }
        return NextResponse.json(
            {message: "Data pesanan tidak ditemukan"},
            {status: 404, statusText: "Not Found"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: error}
        )
    }
}

export const DELETE = async (req, {params}) => {
    const { id } = await params;
    if(!id) {
        return NextResponse.json(
            {message: "Mohon lengkapi data input"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const orderRef = doc(db, "order_lists", id)
        const searchOrder = await getDoc(orderRef);
        if(searchOrder.exists()) {
            await deleteDoc(orderRef);
            return NextResponse.json(
                {message: "Data pesanan berhasil dihapus"},
                {status: 200, statusText: "Ok"}
            )
        }
        return NextResponse.json(
            {message: "Data pesanan tidak ditemukan"},
            {status: 404, statusText: "Not Found"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: error}
        )
    }
}