import Card from "../Card";

async function getFoods() {
	const res = await fetch("http://localhost:3000/api/menus/foods", {method: "GET"});
	return res.json();
}

async function getDrinks() {
    const res = await fetch("http://localhost:3000/api/menus/foods");
	return res.json();
}

const CardList = async () => {
    const foodsResponse = await getFoods()
    const drinksResponse = await getDrinks()

    const foods = foodsResponse.message
    const drinks = drinksResponse.message

    console.log(foods);

	return (
		<div className="grid grid-cols-3 gap-3">
            {
                foods.map(data => {
                    return (
                        <Card key={data.id} data={data} />
                    )
                })
            }
		</div>
	);
};

export default CardList;
