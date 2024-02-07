import { NextResponse } from "next/server"
import { doc, setDoc, getDocs, getDoc, where, collection, query } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
import { db } from "@/app/firebase"

export const GET = async req => {
    try {
        const getAllTables = await getDocs(collection(db, "tables"));
        const isDataEmpty = getAllTables.empty
        if(!isDataEmpty) {
            let responseData = [];
            getAllTables.forEach(doc => {
                const data = doc.data()
                const id = doc.id
                const {name, status, category, capacity} = data
                responseData.push({id, name, status, category, capacity})
            })
            return NextResponse.json(
                {message: responseData},
                {status: 200, statusText: "Ok"}
            )
        }
        return NextResponse.json(
            {message: "Tidak ada data meja"},
            {status: 200, statusText: "Ok"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: error}
        ) 
    }
}

export const POST = async req => {
    const { name, status, capacity, category } = await req.json();
    if(!name || !status || !capacity || !category) {
        return NextResponse.json(
            {message: "Mohon lengkapi data input"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const searchQuery = query(collection(db, "tables"), where("name", "==", name))
        const searchData = await getDocs(searchQuery)
        if(searchData.empty) {
            const id = uuidv4()
            const tableRef = doc(db, "tables", id)
            await setDoc(tableRef, {
                name, status, capacity, category
            })
            return NextResponse.json(
                {message: "Data meja berhasil dibuat"},
                {status: 201, statusText: "Created"}
            )
        }
        return NextResponse.json(
            {message: "Nama meja sudah digunakan"},
            {status: 409, statusText: "Conflict"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: error}
        ) 
    }
}