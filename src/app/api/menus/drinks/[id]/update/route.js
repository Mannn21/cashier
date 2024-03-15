import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

export const POST = async (req, { params }) => {
	const { id } = await params;
	const { name, details } = await req.json();
	if (!id || !name || !details) {
		return NextResponse.json(
			{ message: "Mohon lengkapi data input" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const drinkRef = doc(db, "drinks", id);
		const getDrink = await getDoc(drinkRef);
		if (getDrink.exists()) {
			await updateDoc(drinkRef, {
				name,
				details,
			});
			return NextResponse.json(
				{ message: "Data minuman berhasil diperbarui" },
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
