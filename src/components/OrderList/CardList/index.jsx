import Card from "../Card";

async function getFoods() {
	const res = await fetch("http://localhost:3000/api/menus/foods", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
}

async function getDrinks() {
	const res = await fetch("http://localhost:3000/api/menus/drinks", {
		method: "GET",
		cache: "no-store",
	});
	return res.json();
}

const CardList = async () => {
    const menus = []
	const foodsResponse = await getFoods();
	const drinksResponse = await getDrinks();

	const foods = foodsResponse.message;
	const drinks = drinksResponse.message;

    foods.map(data => {
        menus.push(data)
    })
    drinks.map(data => {
        menus.push(data)
    })

	return (
		<div className="grid grid-cols-3 gap-3">
			{menus.map(data => {
				return <Card key={data.id} data={data} />;
			})}
		</div>
	);
};

export default CardList;
