export const postTable = async (data) => {
	const res = await fetch("http://localhost:3000/api/tables", {
		method: "POST",
		cache: "no-store",
        body: JSON.stringify(data)
	});
	return res.json();
}