import { daysDatas } from "@/data/daysDatas";

export function getDaysFormatted(tanggalString) {
    const parsedDatetime = new Date(tanggalString);

    const dayIndex = parsedDatetime.getDay();
    const dayName = daysDatas[dayIndex];

    return dayName;
}
