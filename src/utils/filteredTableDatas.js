export const filteredTableDatas = (tables, category, status) => {
    if (typeof tables === "string") {
        return [];
    }
    return tables?.filter(data => {
        const isCategoryMatch = category.toLowerCase() === "semua meja" || category.toLowerCase() === data.category.toLowerCase();
        const isStatusMatch = status.toLowerCase() === "semua" || status === data.status.toString();
        return isCategoryMatch && isStatusMatch;
    });
}