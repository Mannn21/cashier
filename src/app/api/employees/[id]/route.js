import { NextResponse } from "next/server";
import { doc, getDoc, deleteDoc } from "firebase/firestore"
import { db } from "@/app/firebase";

export const GET = async (req, { params }) => {
    const { id } = await params;
    try {
        const docRef = doc(db, "employees", id)
        const searchDoc = await getDoc(docRef)
        if(searchDoc.exists()) {
            const data = searchDoc.data()
            const responseData = {
                id: searchDoc.id,
                name: data.name,
                email: data.email,
                role: data.role,
                age: data.age,
                image: data.image
            }
            return NextResponse.json(
                {message: responseData},
                {status: 200, statusText: "Ok"}
            )
        }
        return NextResponse.json(
            {message: "Data pegawai tidak ditemukan"},
            {status: 404, statusText: "Not Found"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Masalah pada server"},
            {status: 500, statusText: error}
        )
    }
}

export const DELETE = async (req, {params}) => {
    const {id} = await params;
    try {
        const docRef = doc(db, "employees", id)
        const searchDoc = await getDoc(docRef)
        if(searchDoc.exists()) {
            await deleteDoc(docRef);
            return NextResponse.json(
                {message: "Data pegawai berhasil dihapus"},
                {status: 200, statusText: "Ok"}
            )
        }
        return NextResponse.json(
            {message: "Data pegawai tidak ditemukan"},
            {status: 404, statusText: "Not Found"}
        )     
    } catch (error) {
        return NextResponse.json(
            {message: "Masalah pada server"},
            {status: 500, statusText: error}
        )
    }
}