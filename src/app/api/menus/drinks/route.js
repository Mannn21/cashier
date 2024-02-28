import { NextResponse } from "next/server"
import { doc, setDoc, getDocs, query, collection, where } from "firebase/firestore"
import { ref, getDownloadURL, uploadBytes,  } from "firebase/storage";
import { v4 as uuidv4 } from "uuid"
import { db, storage } from "@/app/firebase"

export const GET = async req => {
    try {
        const getAllDrinks = await getDocs(collection(db, "drinks"))
        if(!getAllDrinks.empty) {
            let responseData = [];
            getAllDrinks.forEach(doc => {
                const id = doc.id
                const data = doc.data();
                const { name, price, stock, details, discount, image_URI, image_name, category } = data
                responseData.push({id, name, price, stock, details, discount, image_URI, image_name, category})
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

export const POST = async req => {
    const formData = await req.formData();
    const name = formData.get('name');
    const price = formData.get('price');
    const stock = formData.get('stock');
    const details = formData.get('details');
    const discount = formData.get('discount');
    const image = formData.get('image');
    const category = formData.get('category')
    if(!image || !name || !price || !stock || ! details || !discount || !category) {
        return NextResponse.json(
            {message: "Harap lengkapi input data"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const id = uuidv4()
        const drinkQuery = query(collection(db, "drinks"), where("name", "==", name))
        const searchDrink = await getDocs(drinkQuery)
        if(searchDrink.empty) {
            const storageRef = ref(storage, `images/drinks/drink_${id}`);
            const snapshot = await uploadBytes(storageRef, image);
            const downloadURL = await getDownloadURL(snapshot.ref);
            if(downloadURL !== "" || downloadURL !== undefined) {
                const docRef = doc(db, "drinks", id)
                await setDoc(docRef, {
                    name, price, stock, details, discount, category, image_URI: downloadURL, image_name: `drink_${id}`
                })
                return NextResponse.json(
                    { message: "Berhasil menambah data minuman"},
                    { status: 201, statusText: "Created" }
                );
            }
            return NextResponse.json(
                { message: "Gagal mengupload data minuman"},
                { status: 500, statusText: "Internal Server Error" }
            );
        }
        return NextResponse.json(
            {message: "Data minuman sudah tersedia"},
            {status: 409, statusText: "Conflict"}
        )
    } catch (error) {
        return NextResponse.json(
            { message: "Kesalahan pada server" },
            { status: 500, statusText: error }
        );
    }
};