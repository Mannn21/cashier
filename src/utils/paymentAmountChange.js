export const paymentAmountChange = event => {
    const rawValue = event.target.value.replace(/\D/g, "");
    const formattedValue = formatToRupiah(parseInt(rawValue));
    return formattedValue;
};