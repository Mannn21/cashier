import { NextResponse } from "next/server"
import { doc, getDoc, deleteDoc } from "firebase/firestore"
import { db } from "@/app/firebase"

export const GET = async (req, { params }) => {
    const {id} = await params;
    if(!id) {
        return NextResponse.json(
            {message: "Mohon lengkapi data"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const docRef = doc(db, "tables", id)
        const searchDoc = await getDoc(docRef)
        if(searchDoc.exists()) {
            const data = searchDoc.data()
            const responseData = {
                id: searchDoc.id,
                name: data.name,
                category: data.category,
                capacity: data.capacity,
                status: data.status,
            }
            return NextResponse.json(
                {message: responseData},
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
            {status: 200, statusText: error}
        )
    }
}

export const DELETE = async (req, { params }) => {
    const {id} = await params;
    if(!id) {
        return NextResponse.json(
            {message: "Mohon lengkapi data"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const docRef = doc(db, "tables", id)
        const searchDoc = await getDoc(docRef)
        if(searchDoc.exists()) {
            await deleteDoc(docRef);
            return NextResponse.json(
                {message: "Data meja berhasil dihapus"},
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
            {status: 200, statusText: error}
        )
    }
}