import { NextResponse } from "next/server"
import { doc, setDoc, getDocs, query, collection, where } from "firebase/firestore"
import { ref, getDownloadURL, uploadBytes,  } from "firebase/storage";
import { v4 as uuidv4 } from "uuid"
import { db, storage } from "@/app/firebase"
import { giveCurrentDateTime } from "@/lib/currentDate";

export const GET = async req => {
    try {
        const getAllFoods = await getDocs(collection(db, "foods"))
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
    const formData = await req.formData();
    const image = formData.get('image');
    const name = formData.get('name');
    const price = formData.get('price');
    const stock = formData.get('stock');
    const details = formData.get('details');
    const discount = formData.get('discount');
    if(!image || !name || !price || !stock || ! details || !discount) {
        return NextResponse.json(
            {message: "Harap lengkapi input data"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const id = uuidv4()
        const foodQuery = query(collection(db, "foods"), where("name", "==", name))
        const searchFood = await getDocs(foodQuery)
        if(searchFood.empty) {
                const dateTime = giveCurrentDateTime();
                const storageRef = ref(storage, `images/foods/food_${id}`);
                const snapshot = await uploadBytes(storageRef, image);
                const downloadURL = await getDownloadURL(snapshot.ref);
            if(downloadURL !== "" || downloadURL !== undefined) {
                const docRef = doc(db, "foods", id)
                await setDoc(docRef, {
                    name, price, stock, details, discount, image_URI: downloadURL, image_name: `food_${id}`
                })
                return NextResponse.json(
                    { message: "Berhasil menambah data makanan"},
                    { status: 201, statusText: "Created" }
                );
            }
            return NextResponse.json(
                { message: "Gagal mengupload data makanan"},
                { status: 500, statusText: "Internal Server Error" }
            );
        }
        return NextResponse.json(
            {message: "Data makanan sudah tersedia"},
            {status: 409, statusText: "Conflict"}
        )
    } catch (error) {
        return NextResponse.json(
            { message: "Kesalahan pada server" },
            { status: 500, statusText: error }
        );
    }
};