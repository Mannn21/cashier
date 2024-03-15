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
		const drinkRef = doc(db, "drinks", id);
		const getDrink = await getDoc(drinkRef);
		if (getDrink.exists()) {
			const drinkImageRef = ref(storage, `images/drinks/drink_${id}`);
			const imageMetadata = await getMetadata(drinkImageRef);
			const storageRef = ref(storage, `images/drinks/drink_${id}`);
			if (imageMetadata.name) {
				await deleteObject(drinkImageRef);
				const snapshot = await uploadBytes(storageRef, image);
				const downloadURL = await getDownloadURL(snapshot.ref);
				if (downloadURL !== "" || downloadURL !== undefined) {
					await updateDoc(drinkRef, { image_URI: downloadURL });
					return NextResponse.json(
						{ message: "Berhasil mengubah gambar data minuman" },
						{ status: 200, statusText: "Ok" }
					);
				}
				return NextResponse.json(
					{ message: "Gagal mengupload data minuman" },
					{ status: 500, statusText: "Internal Server Error" }
				);
			}
			const snapshot = await uploadBytes(storageRef, image);
			const downloadURL = await getDownloadURL(snapshot.ref);
			if (downloadURL !== "" || downloadURL !== undefined) {
				await updateDoc(drinkRef, { image_URI: downloadURL });
				return NextResponse.json(
					{ message: "Berhasil menambah gambar data minuman" },
					{ status: 200, statusText: "Ok" }
				);
			}
			return NextResponse.json(
				{ message: "Gagal mengupload data minuman" },
				{ status: 500, statusText: "Internal Server Error" }
			);
		}
		return NextResponse.json(
			{ message: "Data minuman tidak ditemukan" },
			{ status: 404, statusText: "Not Found" }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Kesalahan pada server" },
			{ status: 500, statusText: error }
		);
	}
};
