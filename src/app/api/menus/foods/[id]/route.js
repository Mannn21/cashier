import { NextResponse } from "next/server"
import { doc, getDoc, deleteDoc } from "firebase/firestore"
import { ref, deleteObject, getMetadata } from "firebase/storage"
import { db, storage } from "@/app/firebase"

export const GET = async (req, { params }) => {
    try {
        const { id } = await params;
        if(!id) {
            return NextResponse.json(
                {message: "Tolong lengkapi data input"},
                {status: 400, statusText: "Bad Request"}
            )
        }
        const foodRef = doc(db, "foods", id)
        const searchFood = await getDoc(foodRef)
        if(searchFood.exists()) {
            const responseData = searchFood.data()
            return NextResponse.json(
                {message: responseData},
                {status: 200, statusText: "Ok"}
            )
        }
        return NextResponse.json(
            {message: "Data makanan tidak ditemukan"},
            {status: 404, statusText: "Not Found"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Kesalahan pada server"},
            {status: 500, statusText: error}
        )
    }
}

export const DELETE = async (req, { params }) => {
    try {
        const { id } = params;
        if (!id) {
            return NextResponse.json(
                { message: "Tolong lengkapi data input" },
                { status: 400, statusText: "Bad Request" }
            );
        }
        
        const foodImageData = ref(storage, `images/foods/food_${id}`);
        const imageMetadata = await getMetadata(foodImageData);
        if (imageMetadata.name) {
            await deleteObject(foodImageData);
            
            const foodRef = doc(db, "foods", id);
            const searchDrink = await getDoc(foodRef);
            if (searchDrink.exists()) {
                await deleteDoc(foodRef);
                return NextResponse.json(
                    { message: "Data makanan berhasil dihapus" },
                    { status: 200, statusText: "Ok" }
                );
            } else {
                return NextResponse.json(
                    { message: "Data makanan tidak ditemukan" },
                    { status: 404, statusText: "Not Found" }
                );
            }
        } else {
            return NextResponse.json(
                { message: "Data gambar tidak ditemukan" },
                { status: 404, statusText: "Not Found" }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { message: "Kesalahan pada server" },
            { status: 500, statusText: error.message }
        );
    }
};