import { getDateOrder } from "./getDateOrder";

export const historySearched = (history, keyword, date) => {
    if (typeof history === "string") {
        return [];
    }

    return history?.filter(data => {
        const searchData = ["customer_name", "cashier_name", "table_name"].some(
            prop =>
                data[prop] && data[prop].toLowerCase().includes(keyword.toLowerCase())
        );

        if (date === "") {
            return searchData;
        }

        const formattedDate = getDateOrder(data.date_order);
        const isDateMatch = formattedDate === date;

        return searchData && isDateMatch;
    });
}