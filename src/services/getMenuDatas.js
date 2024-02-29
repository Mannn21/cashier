export async function getFoods() {
	const res = await fetch("http://localhost:3000/api/menus/foods", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
}

export async function getDrinks() {
	const res = await fetch("http://localhost:3000/api/menus/drinks", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
}