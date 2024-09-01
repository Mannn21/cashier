// "use client"

// import { useEffect } from "react";
import ListCard from "@/components/Dashboard/ListCard";
import Graphics from "@/components/Dashboard/Graphics";
import DashboardTable from "@/components/Dashboard/DashboardTable";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
	// useEffect(() => {
	// 	onAuthStateChanged(auth, user => {
	// 		if (user) {
	// 			console.log("MASUK SINI")
	// 			console.log(user);
	// 			const uid = user.uid;
	// 			console.log({ uid });
	// 		} else {
	// 			console.log("Gada")
	// 		}
	// 	});
	// }, [])
	
	return (
		<div className="w-full h-auto p-2">
			<div className="w-full h-auto flex flex-col gap-2">
				<div className="w-full h-auto">
					<ListCard />
				</div>
				<div className="w-full h-auto">
					<Graphics />
				</div>
				<div className="w-full h-auto">
					<DashboardTable />
				</div>
			</div>
		</div>
	);
}
