export async function getTables() {
	const res = await fetch("http://localhost:3000/api/tables", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
}
