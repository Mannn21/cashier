export const searchedDataServingsByKeyword = (servings, keyword) => {
    if (typeof servings === "string") {
        return [];
    } else {
        return servings?.filter(data => {
            return ["cashierName", "customerName", "tableName"].some(
                prop =>
                    data[prop] &&
                    data[prop].toLowerCase().includes(keyword.toLowerCase())
            );
        });
    }
}