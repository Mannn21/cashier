import { NextResponse } from "next/server";
import { doc, setDoc, getDocs, collection, where, query } from "firebase/firestore";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/app/firebase";

export const GET = async req => {
    try {
        const getAllEmployees = await getDocs(collection(db, "employees"));
        const isEmployeesEmpty = getAllEmployees.empty
        if(!isEmployeesEmpty) {
            let responseData = [];
            getAllEmployees.forEach(doc => {
                const data = doc.data()
                const id = doc.id
                const {email, name, role, address, age} = data
                responseData.push({id, email, name, role, address, age})
            })
            return NextResponse.json(
                {message: responseData},
                {status: 200, statusText: "Ok"}
            )
        }
        return NextResponse.json(
            {message: isEmployeesEmpty},
            {status: 200, statusText: "Ok"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Masalah pada server"},
            {status: 500, statusText: "Internal Server Error"}
        )
    }
}

export const POST = async req => {
	const { email, name, password, confPassword } = await req.json();
	if (!email || !name || !password || !confPassword) {
		return NextResponse.json(
			{ message: "Mohon lengkapi data" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	if (password !== confPassword) {
		return NextResponse.json(
			{ message: "Konfirmasi password tidak sesuai" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
        const searchQuery = query(collection(db, "employees"), where("email", "==", email))
        const searchData = await getDocs(searchQuery)
        const isDataNotExist = searchData.empty
        if(isDataNotExist) {
            const id = uuidv4();
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(confPassword, salt);
            await setDoc(doc(db, "employees", id), {
                email, name, password: encryptedPassword
            })
            return NextResponse.json(
                {message: "Registrasi berhasil"},
                {status: 201, statusText: "Created"}
            )
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
