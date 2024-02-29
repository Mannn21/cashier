export const formatToRupiah = angka => {
    const rupiah = angka?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `Rp. ${rupiah}`;
}