const getFoods = async () => {
	const res = await fetch("http://localhost:3000/api/menus/foods", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
}

const getDrinks = async () => {
	const res = await fetch("http://localhost:3000/api/menus/drinks", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
}

export async function getMenus() {
	const menus = [];
	const foodsData = await getFoods();
	const drinksData = await getDrinks();

	const foods = foodsData.message;
	const drinks = drinksData.message;
	foods.map(food => {
		menus.push(food)
	})
	drinks.map(drink => {
		menus.push(drink)
	})
	return menus;
}