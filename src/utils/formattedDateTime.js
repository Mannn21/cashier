import { daysDatas } from "@/data/daysDatas";
import { monthData } from "@/data/monthData";

export function formattedDateTime(tanggalString) {
	const parsedDatetime = new Date(tanggalString);

	const formatDateTime =
		daysDatas[parsedDatetime.getDay()] +
		", " +
		parsedDatetime.getDate() +
		" " +
		monthData[parsedDatetime.getMonth()] +
		" " +
		parsedDatetime.getFullYear();

	return formatDateTime;
}
