import { NextResponse } from "next/server";
import {
	doc,
	setDoc,
	getDocs,
	where,
	collection,
	query,
} from "firebase/firestore";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/app/firebase";

export const POST = async req => {
	const { email, password } = await req.json();
	if (!email || !password) {
		return NextResponse.json(
			{ message: "Mohon lengkapi data input" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const searchEmployeeQuery = query(
			collection(db, "employees"),
			where("email", "==", email)
		);
		const searchEmployeeData = await getDocs(searchEmployeeQuery);
		if (!searchEmployeeData.empty) {
			let data;
			let employeeId;
			searchEmployeeData.forEach(doc => {
				data = doc.data();
				employeeId = doc.id;
			});
			const comparePassword = await bcrypt.compare(password, data.password);
			if (comparePassword) {
				const searchAuthQuery = query(
					collection(db, "auth"),
					where("email", "==", data.email)
				);
				const searchAuthData = await getDocs(searchAuthQuery);
				if (!searchAuthData.empty) {
					const id = uuidv4();
					const time = new Date().toLocaleTimeString();
					await setDoc(doc(db, "auth", id), {
						user_id: employeeId,
						name: data.name,
						time_login: time,
					});
					return NextResponse.json(
						{ message: "Login berhasil", status: "Ok" },
						{ status: 201, statusText: "Created" }
					);
				}
				let loginData;
				searchAuthData.forEach(doc => {
					data = doc.data;
					console.log({ data });
				});
				// console.log({loginData});
				return NextResponse.json(
					{ message: "OK", status: "Ok" },
					{ status: 200, statusText: "Ok" }
				);
			}
			return NextResponse.json(
				{ message: "Password tidak sesuai" },
				{ status: 400, statusText: "Bad Request" }
			);
		}
		return NextResponse.json(
			{ message: "Data pegawai tidak ditemukan" },
			{ status: 404, statusText: "Not Found" }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Kesalahan pada server" },
			{ status: 500, statusText: error }
		);
	}
};
