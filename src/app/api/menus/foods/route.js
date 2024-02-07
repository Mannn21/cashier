import { NextResponse } from "next/server"
import { doc, setDoc, getDoc, getDocs, query, collection, where } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
import { db } from "@/app/firebase"

export const GET = async req => {
    try {
        const foodsRef = doc(db, "foods")
        const getAllFoods = await getDocs(collection(foodsRef))
        if(!getAllFoods.empty) {
            let responseData = [];
            getAllFoods.forEach(doc => {
                const id = doc.id
                const data = doc.data();
                const { name, price, stock, details, image, discount } = data
                responseData.push({id, name, price, stock, details, image, discount})
            })
            return NextResponse.json(
                {message: responseData},
                {status: 200, statusText: "Ok"}
            )
        }
        return NextResponse.json(
            {message: "Data menu makanan tidak ditemukan"},
            {status: 404, statusText: "Not Found"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: error}
        )
    }
}

export const POST = async req => {
    const { name, price, stock, details, image, discount, image_URI, image_name } = await req.json();
    return NextResponse.json(
        {message: { name, price, stock, details, image, discount, image_URI, image_name }},
        {status: 200, statusText: "Ok"}
    )
}