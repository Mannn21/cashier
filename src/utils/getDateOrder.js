export function getDateOrder(tanggalString) {
    const [datePart, timePart] = tanggalString.split(' ');

    return datePart;
}
