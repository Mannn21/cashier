import { NextResponse } from "next/server";
import {
	doc,
	setDoc,
	getDocs,
	collection,
	where,
	query,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "@/app/firebase";
import { giveCurrentDateTime } from "@/utils/currentDate";
import {
	checkIsValidEmail,
	checkIsValidPassword,
	checkIsValidImage,
} from "@/utils/regexValidation";

export const GET = async req => {
	try {
		const getAllEmployees = await getDocs(collection(db, "employees"));
		const isEmployeesEmpty = getAllEmployees.empty;
		if (!isEmployeesEmpty) {
			let responseData = [];
			getAllEmployees.forEach(doc => {
				const data = doc.data();
				const id = doc.id;
				const { email, name, role, address, age, image, salary, startedAt } =
					data;
				responseData.push({
					id,
					email,
					name,
					role,
					address,
					age,
					image,
					salary,
					startedAt,
				});
			});
			return NextResponse.json(
				{ message: responseData },
				{ status: 200, statusText: "Ok" }
			);
		}
		return NextResponse.json(
			{ message: "Data pegawai tidak ditemukan" },
			{ status: 200, statusText: "Ok" }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Masalah pada server" },
			{ status: 500, statusText: "Internal Server Error" }
		);
	}
};

export const POST = async req => {
	const formData = await req.formData();
	const image = formData.get("image");
	const name = formData.get("name");
	const email = formData.get("email");
	const password = formData.get("password");
	const confPassword = formData.get("confPassword");
	const age = formData.get("age");
	const address = formData.get("address");
	const salary = formData.get("salary");
	const role = formData.get("role");
	if (
		!email ||
		!name ||
		!password ||
		!confPassword ||
		!age ||
		!address ||
		!salary ||
		!role
	) {
		return NextResponse.json(
			{ message: "Mohon lengkapi data" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	const checkEmail = checkIsValidEmail(email);
	const checkPassword = checkIsValidPassword(password);
	const checkImage = checkIsValidImage(image.name);
	if (password !== confPassword) {
		return NextResponse.json(
			{ message: "Konfirmasi password tidak sesuai" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	if(!checkEmail) {
		return NextResponse.json(
			{ message: "Mohon masukkan email dengan format yang sesuai" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	if(!checkPassword) {
		return NextResponse.json(
			{ message: "Panjang password minimal 5 karakter dengan kombinasi huruf kapital, angka dan simbol." },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	if(!checkImage) {
		return NextResponse.json(
			{ message: "Mohon masukkan gambar yang sesuai (png, jpg, jpeg, atau webp)" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		console.log({ checkEmail, checkPassword, checkImage });
		const searchQuery = query(
			collection(db, "employees"),
			where("email", "==", email)
		);
		const searchData = await getDocs(searchQuery);
		const isDataNotExist = searchData.empty;
		if (isDataNotExist) {
			const id = uuidv4();
			const salt = await bcrypt.genSalt(10);
			const encryptedPassword = await bcrypt.hash(confPassword, salt);
			const storageRef = ref(storage, `images/employees/employee_${id}`);
			const snapshot = await uploadBytes(storageRef, image);
			const downloadURL = await getDownloadURL(snapshot.ref);
			if (downloadURL !== "" || downloadURL !== undefined) {
				await setDoc(doc(db, "employees", id), {
					email,
					name,
					password: encryptedPassword,
					email,
					age: parseInt(age),
					address,
					salary: parseInt(salary),
					role,
					startedAt: giveCurrentDateTime(),
					image: {
						image_URI: downloadURL,
						image_name: `employee_${id}`,
					},
				});
				return NextResponse.json(
					{ message: "Registrasi berhasil", status: "Ok" },
					{ status: 201, statusText: "Created" }
				);
			}
		}
		return NextResponse.json(
			{ message: "Email sudah terdaftar" },
			{ status: 409, statusText: "Conflict" }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Masalah pada server" },
			{ status: 500, statusText: error }
		);
	}
};
