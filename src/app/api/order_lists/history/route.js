import { NextResponse } from "next/server";
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "@/app/firebase";

export const GET = async req => {
    try {
        
    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: error}
        )
    }
}