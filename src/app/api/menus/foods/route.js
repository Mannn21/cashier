import { NextResponse } from "next/server"
import { doc, setDoc, getDoc, getDocs, query, collection, where } from "firebase/firestore"
import { getStorage, ref, getDownloadURL, uploadBytes,  } from "firebase/storage";
import multer from "multer";
import { v4 as uuidv4 } from "uuid"
import { db } from "@/app/firebase"

const storage = getStorage()

const upload = multer({storage: multer.memoryStorage()})

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
    const formData = await req.formData();
    const images = formData.getAll('image');
    const name = formData.getAll('name');
    const price = formData.getAll('price');
    const stock = formData.getAll('stock');
    const details = formData.getAll('details');
    const discount = formData.getAll('discount');
    if(!images || !name || !price || !stock || ! details || !discount) {
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
            let imageURI = ""
            for (const image of images) {
                const dateTime = giveCurrentDateTime();
                const storageRef = ref(storage, `image/${dateTime}`);
                const snapshot = await uploadBytes(storageRef, image);
                const downloadURL = await getDownloadURL(snapshot.ref);
                imageURI = downloadURL
            }
            if(imageURI !== "") {
                const docRef = doc(db, "foods", id)
                await setDoc(docRef, {
                    name, price, stock, details, discount, image_URI: imageURI
                })
                return NextResponse.json(
                    { message: "Berhasil menambah data makanan"},
                    { status: 200, statusText: "Ok" }
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


const giveCurrentDateTime = () => {
    const today = new Date();
    const date =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    return dateTime;
  };