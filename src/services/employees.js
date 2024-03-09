export const postEmployee = async data => {
	const res = await fetch("http://localhost:3000/api/employees", {
		method: "POST",
		cache: "no-store",
		body: data,
	});
	return res.json();
};

export const getEmployees = async () => {
	const res = await fetch("http://localhost:3000/api/employees", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
};
