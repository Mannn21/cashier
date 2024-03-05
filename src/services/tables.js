export async function getTables() {
	const res = await fetch("http://localhost:3000/api/tables", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
}

export const postTable = async (data) => {
	const res = await fetch("http://localhost:3000/api/tables", {
		method: "POST",
		cache: "no-store",
        body: JSON.stringify(data)
	});
	return res.json();
}

export const deleteTable = async id => {
	const res = await fetch(`http://localhost:3000/api/tables/${id}`, {
		method: "DELETE",
		cache: "no-store",
	});
	return res.json();
} 