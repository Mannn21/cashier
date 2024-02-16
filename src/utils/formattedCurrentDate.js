import { monthData } from "@/data/monthData";

export function formattedCurrentDate() {
	const date = new Date();

	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	const formattedDate = day + " " + monthData[monthIndex] + " " + year;

	return formattedDate;
}
