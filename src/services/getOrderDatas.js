export async function getOrder() {
    const res = await fetch("http://localhost:3000/api/order_lists", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
}

export async function checkOrder(id) {
	const res = await fetch(`http://localhost:3000/api/order_lists/${id}`, {
		method: "PUT",
		cache: "no-store"
	})
	return res.json();
}