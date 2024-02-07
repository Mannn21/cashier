import { NextResponse } from "next/server"
import { doc, setDoc, getDoc, getDocs, query, collection, where } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
import { db } from "@/app/firebase"

export const GET = async req => {
    try {
        const drinksRef = doc(db, "drinks")
        const getAllDrinks = await getDocs(collection(drinksRef))
        if(!getAllDrinks.empty) {
            let responseData = [];
            getAllDrinks.forEach(doc => {
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
            {message: "Data menu minuman tidak ditemukan"},
            {status: 404, statusText: "Not Found"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: error}
        )
    }
}