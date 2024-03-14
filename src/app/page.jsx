"use client";

import { useRef, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

	const handleSubmit = async () => {
		setIsLoading(true);
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const data = {
			email,
			password,
		};
		try {
			console.log("%cFetching Authentication User Started....", "style: background-color: black; color: crimson; padding: 10px;")
			console.time("Fetching Authentication User Login")
			const setUserAuth = await signInWithEmailAndPassword(email, password);
			const fetchUser = await fetch("http://localhost:3000/api/auth/login", {
				method: "POST",
				cache: "no-store",
				body: JSON.stringify(data),
			});
			const res = await fetchUser.json();
			if (res.status === "Ok") {
				const userAuth = setUserAuth.user
				console.table({userAuth})
				console.table(res)
				console.timeEnd("Fetching Authentication User Login")
				console.log("%cFetching Authentication User Started....", "style: background-color: black; color: #ADD8E6; padding: 10px;")
				setIsLoading(false)
			}
		} catch (error) {
			setIsLoading(false);
			console.error(error);
		}
	};

	return (
		<div className="w-screen h-screen box-border bg-white">
			<div className="w-full h-full flex justify-center items-center">
				<div className="w-96 h-auto px-1 py-3 rounded-xl shadow-2xl flex flex-col justify-start items-center gap-3">
					<div className="w-full h-auto flex justify-center items-center">
						<h1 className="text-3xl font-bold tracking-wide text-black p-2">
							Login Cashier
						</h1>
					</div>
					<div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
						<div className="w-full h-auto p-1 flex flex-col gap-1 justify-start items-start">
							<label
								htmlFor="email"
								className="text-base font-medium tracking-wide text-black">
								Email
							</label>
							<div className="w-full py-1 border border-gray-500 text-gray-800 px-1 rounded-md hover:border-blue-500 focus:border-blue-700">
								<input
									type="email"
									ref={emailRef}
									className="outline-none border-none w-full h-full bg-transparent"
									placeholder="Masukkan email terdaftar"
								/>
							</div>
						</div>
						<div className="w-full h-auto p-1 flex flex-col gap-1 justify-start items-start">
							<label
								htmlFor="password"
								className="text-base font-medium tracking-wide text-black">
								Password
							</label>
							<div className="w-full py-1 border border-gray-500 text-gray-800 px-1 rounded-md hover:border-blue-500 focus:border-blue-700">
								<input
									type="password"
									ref={passwordRef}
									className="outline-none border-none w-full h-full bg-transparent"
									placeholder="*******"
								/>
							</div>
						</div>
					</div>
					<div className="w-full h-auto flexjustify-center items-center mt-4 pb-3">
						<button
							type="button"
							onClick={handleSubmit}
							className="w-full py-2 text-xl font-bold tracking-wide flex justify-center items-center rounded-md bg-color-secondary1 hover:bg-color-secondary1hover hover:text-color-primer ease-in-out transition-all duration-300">
							{
								isLoading ? (<span>Loading...</span>) : (<span>Login</span>)
							}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
