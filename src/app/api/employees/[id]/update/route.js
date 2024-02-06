import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import bcrypt from "bcrypt";
import { db } from "@/app/firebase";

export const POST = async (req, {params}) => {
    const {id} = await params;
    const {name, email, password, role, age, address, newPassword, confNewPassword, salary} = await req.json();
    if(!id || !email || !name || !password || !role || !age || !address || !salary) {
        return NextResponse.json(
            {message: "Data tidak lengkap"},
            {status: 400, statusText: "Bad Request"}
        )
    }
    try {
        const docRef = doc(db, "employees", id)
        const searchDoc = await getDoc(docRef)
        if(searchDoc.exists()) {
            const comparePassword = await bcrypt.compare(password, searchDoc.data().password)
            if(!comparePassword) {
                return NextResponse.json(
                    {message: "Password tidak sesuai"},
                    {status: 400, statusText: "Bad Request"}
                )
            }
            if(password === newPassword) {
                return NextResponse.json(
                    {message: "Mohon gunakan password yang berbeda"},
                    {status: 400, statusText: "Bad Request"}
                )
            }
            if(newPassword !== confNewPassword) {
                return NextResponse.json(
                    {message: "Konfirmasi password baru tidak sesuai"},
                    {status: 400, statusText: "Bad Request"}
                )
            }
            if(!newPassword || !confNewPassword) {
                await updateDoc(docRef, {
                    name, age, role, address, salary
                })
                return NextResponse.json(
                    {message: "Data pegawai berhasil diperbarui"},
                    {status: 200, statusText: "Ok"}
                )
            }
            const salt = await bcrypt.genSalt(10)
            const encryptedPassword = await bcrypt.hash(confNewPassword, salt)
            await updateDoc(docRef, {
                name, age, role, address, salary, password: encryptedPassword
            })
            return NextResponse.json(
                {message: "Data pegawai berhasil diperbarui"},
                {status: 200, statusText: "Ok"}
            )
        }
        return NextResponse.json(
            {message: "Data pegawai tidak ditemukan"},
            {status: 404, statusText: "Not Found"}
        )
    } catch (error) {
        return NextResponse.json(
            {message: "Masalah pada server"},
            {status: 500, statusText: error}
        )
    }
}