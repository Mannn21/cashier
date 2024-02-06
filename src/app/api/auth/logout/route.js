import { NextResponse } from "next/server";
import {
	doc,
	deleteDoc,
	getDocs,
	where,
	collection,
	query,
} from "firebase/firestore";
import { db } from "@/app/firebase";

export const POST = async req => {
	const { userId } = await req.json();
	if (!userId) {
		return NextResponse.json(
			{ message: "Mohon lengkapi data input" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const searchAuthQuery = query(
			collection(db, "auth"),
			where("user_id", "==", userId)
		);
		const searchAuthData = await getDocs(searchAuthQuery);
		if (!searchAuthData.empty) {
			let authId;
			searchAuthData.forEach(doc => (authId = doc.id));
			const logoutRef = doc(db, "auth", authId);
			await deleteDoc(logoutRef);
			return NextResponse.json(
				{ message: "Logout berhasil" },
				{ status: 200, statusText: "Ok" }
			);
		}
		return NextResponse.json(
			{ message: "Mohon login terlebih dahulu" },
			{ status: 401, statusText: "Unauthorized" }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Kesalahan pada server" },
			{ status: 500, statusText: error }
		);
	}
};
