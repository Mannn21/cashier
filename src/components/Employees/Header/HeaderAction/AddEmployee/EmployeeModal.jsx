"use client";

import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import Modal from "@/components/Modal/Modal";
import InputImage from "@/components/InputImage";
import { handlePostEmployee } from "@/services/handlePostEmployee";
import { setAddEmployeeModal } from "@/features/modal/modalSlice";
import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const EmployeeModal = () => {
	const dispatch = useDispatch();
	const [image, setImage] = useState(null);
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const addressRef = useRef(null);
	const ageRef = useRef(null);
	const passwordRef = useRef(null);
	const confPasswordRef = useRef(null);
	const roleRef = useRef(null);
	const salaryRef = useRef(null);

	const handleImage = e => {
		setImage(e);
	};

	const handleCloseEmployeeModal = () => {
		dispatch(setAddEmployeeModal(false));
	};

	const handleSubmit = async () => {
		await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
			.then(userCredential => {
				const user = userCredential.user;
				handlePostEmployee(
					dispatch,
					image,
					user.uid,
					nameRef,
					emailRef,
					addressRef,
					ageRef,
					confPasswordRef,
					passwordRef,
					roleRef,
					salaryRef
				);
			})
			.catch(error => {
				console.log(error.message);
			});
	};

	return (
		<Modal>
			<div className="w-screen h-auto flex justify-center items-center">
				<div className="w-1/2 h-[calc(100vh-40px)] bg-color-primer rounded-md p-3 overflow-auto">
					<div className="w-full h-auto flex flex-col gap-3 justify-start items-center ">
						<div className="w-full h-auto flex flex-col justify-start items-center gap-2">
							<InputImage handleImage={handleImage} />
						</div>
						<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
							<label htmlFor="name">Nama</label>
							<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
								<input
									type="text"
									ref={nameRef}
									placeholder="Masukkan nama..."
									className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
								/>
							</div>
						</div>
						<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
							<label htmlFor="email">Email</label>
							<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
								<input
									type="email"
									ref={emailRef}
									placeholder="Masukkan email..."
									className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
								/>
							</div>
						</div>
						<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
							<label htmlFor="address">Alamat</label>
							<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
								<input
									type="text"
									ref={addressRef}
									placeholder="Masukkan Alamat..."
									className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
								/>
							</div>
						</div>
						<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
							<label htmlFor="age">Usia</label>
							<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
								<input
									type="number"
									ref={ageRef}
									placeholder="Masukkan Usia..."
									className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
								/>
							</div>
						</div>
						<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
							<label htmlFor="password">Password</label>
							<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
								<input
									type="password"
									ref={passwordRef}
									placeholder="********"
									className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
								/>
							</div>
						</div>
						<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
							<label htmlFor="confPassword">Konfirmasi Password</label>
							<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
								<input
									type="password"
									ref={confPasswordRef}
									placeholder="*********"
									className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
								/>
							</div>
						</div>
						<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
							<label htmlFor="role">Jabatan</label>
							<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
								<select
									ref={roleRef}
									defaultValue="Pilih Jabatan"
									className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none">
									<option value="Pilih Jabatan" disabled>
										Pilih Jabatan
									</option>
									<option value="admin">Admin</option>
									<option value="cashier">Kasir</option>
									<option value="waiter/waitress">Pelayan</option>
								</select>
							</div>
						</div>
						<div className="w-full h-auto flex flex-col justify-start items-start gap-2">
							<label htmlFor="salary">Gaji Bulanan</label>
							<div className="w-full h-auto px-2 py-1 border rounded-md hover:border-color-secondary1 focus:border-color-secondary1hover">
								<input
									type="number"
									ref={salaryRef}
									placeholder="Masukkan Jumlah Gaji..."
									className="w-full h-auto text-sm font-medium text-color-tersier3 tracking-wide border-none outline-none focus:border-none focus:outline-none"
								/>
							</div>
						</div>
					</div>
					<div className="w-full h-auto flex flex-row justify-center items-center gap-4 mt-3">
						<button
							type="button"
							onClick={handleCloseEmployeeModal}
							className="w-auto h-auto text-center px-2 py-1 text-color-primer text-lg font-semibold bg-color-accent rounded-md hover:bg-color-accentHover transition-all ease-in-out duration-300">
							Batal
						</button>
						<button
							type="button"
							onClick={handleSubmit}
							className="w-auto h-auto text-center px-2 py-1 text-color-primer text-lg font-semibold bg-color-secondary1 rounded-md hover:bg-color-secondary1hover transition-all ease-in-out duration-300">
							Kirim
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default EmployeeModal;
