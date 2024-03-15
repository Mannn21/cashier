import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
	ref,
	deleteObject,
	getMetadata,
	uploadBytes,
	getDownloadURL,
} from "firebase/storage";
import { db, storage } from "@/app/firebase";

export const POST = async (req, { params }) => {
	const { id } = await params;
	const formData = await req.formData();
	const image = formData.get("image");
	if (!image || !id) {
		return NextResponse.json(
			{ message: "Mohon lengkapi data input" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const foodRef = doc(db, "foods", id);
		const getFood = await getDoc(foodRef);
		if (getFood.exists()) {
			const foodImageRef = ref(storage, `images/foods/food_${id}`);
			const imageMetadata = await getMetadata(foodImageRef);
			const storageRef = ref(storage, `images/foods/food_${id}`);
			if (imageMetadata.name) {
				await deleteObject(foodImageRef);
				const snapshot = await uploadBytes(storageRef, image);
				const downloadURL = await getDownloadURL(snapshot.ref);
				if (downloadURL !== "" || downloadURL !== undefined) {
					await updateDoc(foodRef, { image_URI: downloadURL });
					return NextResponse.json(
						{ message: "Berhasil mengubah gambar data makanan" },
						{ status: 200, statusText: "Ok" }
					);
				}
				return NextResponse.json(
					{ message: "Gagal mengupload data makanan" },
					{ status: 500, statusText: "Internal Server Error" }
				);
			}
			const snapshot = await uploadBytes(storageRef, image);
			const downloadURL = await getDownloadURL(snapshot.ref);
			if (downloadURL !== "" || downloadURL !== undefined) {
				await updateDoc(foodRef, { image_URI: downloadURL });
				return NextResponse.json(
					{ message: "Berhasil menambah gambar data makanan" },
					{ status: 200, statusText: "Ok" }
				);
			}
			return NextResponse.json(
				{ message: "Gagal mengupload data makanan" },
				{ status: 500, statusText: "Internal Server Error" }
			);
		}
		return NextResponse.json(
			{ message: "Data makanan tidak ditemukan" },
			{ status: 404, statusText: "Not Found" }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Kesalahan pada server" },
			{ status: 500, statusText: error }
		);
	}
};
