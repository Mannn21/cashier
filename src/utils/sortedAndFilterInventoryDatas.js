export const sortedAndFilterInventoryDatas = (inventories, category, keyword, price, stock, discount) => {
    if (typeof inventories === "string") {
        return [];
    }

    const filteredData = inventories?.filter(data => {
        const isCategoryMatch =
            category.toLowerCase() === "semua" ||
            category.toLowerCase() === data.category.toLowerCase();
        const isDatasSearch = data.name
            .toLowerCase()
            .includes(keyword.toLowerCase());
        return isCategoryMatch && isDatasSearch;
    });

    const sortedData = filteredData?.slice().sort((a, b) => {
        if (price === "up") {
            if (a.price !== b.price) return a.price - b.price;
        } else if (price === "down") {
            if (a.price !== b.price) return b.price - a.price;
        }

        if (stock === "up") {
            if (a.stock !== b.stock) return a.stock - b.stock;
        } else if (stock === "down") {
            if (a.stock !== b.stock) return b.stock - a.stock;
        }

        if (discount === "up") {
            if (a.discount !== b.discount) return a.discount - b.discount;
        } else if (discount === "down") {
            if (a.discount !== b.discount) return b.discount - a.discount;
        }

        return 0;
    });

    return sortedData;
}