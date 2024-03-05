export const postMenus = async (data, category) => {
	const res = await fetch(`http://localhost:3000/api/menus/${category}`, {
		method: "POST",
		cache: "no-store",
        body: data
	});
	return res.json();
}