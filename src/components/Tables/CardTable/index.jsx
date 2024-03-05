"use client";

import { useDispatch } from "react-redux";
import Icon from "@mdi/react";
import {
	mdiPencilOutline,
	mdiDeleteOutline,
	mdiPartyPopper,
	mdiAccountSupervisor,
	mdiAccountGroup,
	mdiAccount,
	mdiAccountTie,
} from "@mdi/js";
import Swal from "sweetalert2";
import { setTableDatas } from "@/features/table/tableSlice";
import { getTables } from "@/services/tables";
import { deleteTable } from "@/services/tables";
import { sortDatas } from "@/utils/sortDatas";

const CardTable = ({ data }) => {
	const dispatch = useDispatch();
	let status;
	let icon;
	if (!data.status) status = "Tersedia";
	if (data.status) status = "Sedang Digunakan";
	if (data.category === "personal") icon = mdiAccount;
	if (data.category === "couple") icon = mdiAccountSupervisor;
	if (data.category === "family") icon = mdiAccountGroup;
	if (data.category === "private") icon = mdiAccountTie;
	if (data.category === "party") icon = mdiPartyPopper;

	const handleRefresh = async () => {
		const response = await getTables();
		const sortedTables = sortDatas(response.message);
		dispatch(setTableDatas(sortedTables));
	};

	const handleDelete = async id => {
		Swal.fire({
			title: "Menunggu",
			text: "Sedang memproses pesanan...",
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});

		try {
			const response = await deleteTable(id);
			if (response.status === "Ok") {
				handleRefresh();
				Swal.fire({
					icon: "success",
					timer: 2000,
					timerProgressBar: true,
					title: "Sukses!",
					text: response.message,
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Ada kesalahan saat memproses pesanan.",
				});
			}
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Terjadi kesalahan saat memposting pesanan.",
			});
		}
	};

	return (
		<div
			className={`w-full h-auto rounded-md shadow-xl bg-color-primer border-2 ${
				!data.status ? "border-color-secondary1" : "border-color-accent"
			}`}>
			<div className="w-full h-auto relative px-2 pt-3 pb-6 flex flex-col justify-center items-center">
				<div className="w-full h-full flex flex-row gap-3">
					<div className="w-1/3 h-full flex flex-col justify-center items-center gap-1">
						<div className="p-1 flex justify-center items-center text-color-dark">
							<Icon path={icon} size={1.6} />
						</div>
						<h4 className="text-base font-semibold tracking-wide">
							{data.category}
						</h4>
					</div>
					<div className="w-2/3 h-auto flex flex-col justify-around items-start">
						<h2 className="text-base font-semibold tracking-wide text-color-dark">
							{data.name}
						</h2>
						<span className="text-sm font-medium tracking-wide">
							Kapasitas {data.capacity} orang
						</span>
						<span className="text-sm font-medium tracking-wide">{status}</span>
					</div>
				</div>
				<div className="absolute bottom-0 right-0">
					<button
						className={`w-auto h-auto p-1 absolute rounded-full right-14 -bottom-4 border-2 bg-color-primer hover:text-color-secondary1 hover:rotate-12 ease-in-out duration-300 transition-all ${
							!data.status ? "border-color-secondary1" : "border-color-accent"
						}`}>
						<Icon path={mdiPencilOutline} size={1} />
					</button>
					<button
						type="button"
						onClick={() => handleDelete(data.id)}
						className={`w-auto h-auto p-1 absolute rounded-full right-3 -bottom-4 border-2 bg-color-primer hover:text-color-accent hover:rotate-12 ease-in-out duration-300 transition-all ${
							!data.status ? "border-color-secondary1" : "border-color-accent"
						}`}>
						<Icon path={mdiDeleteOutline} size={1} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardTable;
