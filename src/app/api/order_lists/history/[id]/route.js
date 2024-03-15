import { NextResponse } from "next/server";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

export const GET = async (req, { params }) => {
	const { id } = await params;
	if (!id) {
		return NextResponse.json(
			{ message: "Harap lengkapi data input" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const historyRef = doc(db, "history", id);
		const getHistory = await getDoc(historyRef);
		if (getHistory.exists()) {
			const data = getHistory.data();
			return NextResponse.json(
				{ message: data },
				{ status: 200, statusText: "Ok" }
			);
		}
		return NextResponse.json(
			{ message: "Data riwayat pesanan tidak ditemukan" },
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
	const { id } = await params;
	if (!id) {
		return NextResponse.json(
			{ message: "Harap lengkapi data input" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const historyRef = doc(db, "history", id);
		const getHistory = await getDoc(historyRef);
		if (getHistory.exists()) {
			await deleteDoc(historyRef);
			return NextResponse.json(
				{ message: "Data riwayat pesanan berhasil dihapus" },
				{ status: 200, statusText: "Ok" }
			);
		}
		return NextResponse.json(
			{ message: "Data riwayat pesanan tidak ditemukan" },
			{ status: 404, statusText: "Not Found" }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Kesalahan pada server" },
			{ status: 500, statusText: error }
		);
	}
};
