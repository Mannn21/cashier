export const getHistory = async () => {
	const res = await fetch("http://localhost:3000/api/order_lists/history", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
};
