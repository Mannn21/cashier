export const sortDatas = (datas) => {
    return datas.sort((a, b) => {
        const [, numA] = a.name.split(" ");
        const [, numB] = b.name.split(" ");
        return parseInt(numA) - parseInt(numB);
    });
}
