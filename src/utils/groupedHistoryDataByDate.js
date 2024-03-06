import { getDateOrder } from "./getDateOrder";

export const groupedHistoryDataByDate = searchedData => {
    const groupedData = {};
		if (typeof searchedData === "string") {
			return groupedData;
		}
	
		searchedData.forEach(data => {
			const formattedDate = getDateOrder(data.date_order);
			if (!groupedData[formattedDate]) {
				groupedData[formattedDate] = [];
			}
			groupedData[formattedDate].push(data);
		});
	
		Object.keys(groupedData).forEach(date => {
			groupedData[date].sort((a, b) => {
				const timeA = new Date(`1970/01/01 ${a.time_order}`);
				const timeB = new Date(`1970/01/01 ${b.time_order}`);
				return timeA - timeB;
			});
		});
	
		const sortedDates = Object.keys(groupedData).sort((a, b) => {
			const dateA = new Date(a);
			const dateB = new Date(b);
			return dateB - dateA;
		});
	
		return sortedDates.reduce((sortedGroupedData, date) => {
			sortedGroupedData[date] = groupedData[date];
			return sortedGroupedData;
		}, {});
	
}