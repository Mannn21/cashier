export const getHistory = async () => {
	const res = await fetch("http://localhost:3000/api/order_lists/history", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
};

export const getIncomeByMonth = async () => {
	const date = new Date();
	const month = date.getMonth() + 1;
	const res = await fetch(`http://localhost:3000/api/order_lists/history/details?month=${month}`, {
		method: "GET",
		cache: "no-store"
	});
	const response = await res.json();
	return response.message;
}