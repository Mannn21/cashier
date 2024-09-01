import { NextResponse } from "next/server";
import { auth } from "./app/firebase";
import { onAuthStateChanged } from "firebase/auth";

export function middleware(req) {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("User signed in:", user);
                const uid = user.uid;
                console.log({ uid });
                resolve(NextResponse.next());
            } else {
                console.log("User not signed in. Redirecting...");
                resolve(NextResponse.redirect(new URL("/", req.url)));
            }
        }, reject);
    });
}

export const config = {
    matcher: "/dashboard"
};
