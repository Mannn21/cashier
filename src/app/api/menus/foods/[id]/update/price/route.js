import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

export const POST = async (req, { params }) => {
	const { id } = await params;
	const { price, discount } = await req.json();
	if (!id || !price) {
		return NextResponse.json(
			{ message: "Mohon lengkapi data input" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const foodRef = doc(db, "foods", id);
		const getFood = await getDoc(foodRef);
		if (getFood.exists()) {
			await updateDoc(foodRef, {
				price,
				discount,
			});
			return NextResponse.json(
				{ message: "Data makanan berhasil diperbarui" },
				{ status: 200, statusText: "Ok" }
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
