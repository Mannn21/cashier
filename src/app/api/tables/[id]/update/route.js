import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

export const POST = async (req, { params }) => {
	const { id } = await params;
	const { status, name, capacity, category } = await req.json();
	if (
		!id ||
		!name ||
		status === undefined ||
		status === "" ||
		!capacity ||
		!category
	) {
		return NextResponse.json(
			{ message: "Mohon lengkapi data input" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const tableRef = doc(db, "tables", id);
		const getTable = await getDoc(tableRef);
		if (getTable.exists()) {
			updateDoc(tableRef, {
				name,
				capacity,
				status,
				category,
			});
			return NextResponse.json(
				{ message: "Data meja berhasil diperbarui" },
				{ status: 200, statusText: "Ok" }
			);
		}
		return NextResponse.json(
			{ message: "Data meja tidak ditemukan" },
			{ status: 404, statusText: "Not Found" }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Kesalahan pada server" },
			{ status: 500, statusText: error }
		);
	}
};
