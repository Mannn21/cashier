import { NextResponse } from "next/server"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "@/app/firebase"

export const GET = async (req, { params }) => {
    const { id } = await params;
    if(!id) {
        return NextResponse.json(
            {message: "Mohon lengkapi data input"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const tableRef = doc(db, "tables", id)
        const getTable = await getDoc(tableRef)
        if(getTable.exists()) {
            updateDoc(tableRef, {
                status: !getTable.data().status
            })
            return NextResponse.json(
                {message: "Status meja berhasil diperbarui"},
                {status: 200, statusText: "Ok"}
            )
        }
        return NextResponse.json(
            {message: "Data meja tidak ditemukan"},
            {status: 404, statusText: "Not Found"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: error}
        )
    }
}