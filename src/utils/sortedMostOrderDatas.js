export const sortedMostOrderDatas = orders => {
	if (typeof orders === "string") {
		return [];
	}

	const sortedData = orders?.slice().sort((a, b) => {
		return b.quantity - a.quantity;
	});

	return sortedData;
};
