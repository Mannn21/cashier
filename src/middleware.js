import { NextResponse } from "next/server";
import { auth } from "./app/firebase";
import { onAuthStateChanged } from "firebase/auth";

export function middleware(req) {
	onAuthStateChanged(auth, user => {
		// console.log("Test MASUK SINI")
		console.log(user)
		if (user) {
			console.log("MASUK SINI")
			console.log(user);
			const uid = user.uid;
			console.log({ uid });
			return NextResponse.next();
		} else {
			return NextResponse.redirect(new URL("/", req.url));
		}
	});
}

export const config = {
	matcher: "/dashboard",
};
