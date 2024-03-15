import { NextResponse } from "next/server";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject, getMetadata } from "firebase/storage";
import { db, storage } from "@/app/firebase";

export const GET = async (req, { params }) => {
	try {
		const { id } = await params;
		if (!id) {
			return NextResponse.json(
				{ message: "Tolong lengkapi data input" },
				{ status: 400, statusText: "Bad Request" }
			);
		}
		const drinkRef = doc(db, "drinks", id);
		const searchDrink = await getDoc(drinkRef);
		if (searchDrink.exists()) {
			const responseData = searchDrink.data();
			return NextResponse.json(
				{ message: responseData },
				{ status: 200, statusText: "Ok" }
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

export const DELETE = async (req, { params }) => {
	try {
		const { id } = params;
		if (!id) {
			return NextResponse.json(
				{ message: "Tolong lengkapi data input" },
				{ status: 400, statusText: "Bad Request" }
			);
		}

		const drinkImageRef = ref(storage, `images/drinks/drink_${id}`);
		const imageMetadata = await getMetadata(drinkImageRef);
		if (imageMetadata.name) {
			await deleteObject(drinkImageRef);

			const drinkRef = doc(db, "drinks", id);
			const searchDrink = await getDoc(drinkRef);
			if (searchDrink.exists()) {
				await deleteDoc(drinkRef);
				return NextResponse.json(
					{ message: "Data minuman berhasil dihapus", status: "Ok" },
					{ status: 200, statusText: "Ok" }
				);
			} else {
				return NextResponse.json(
					{ message: "Data minuman tidak ditemukan" },
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
