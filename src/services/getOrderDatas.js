export async function getOrder() {
    const res = await fetch("http://localhost:3000/api/order_lists", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
}