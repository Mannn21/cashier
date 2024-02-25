import {
	mdiCurrencyUsd,
	mdiBasketCheckOutline,
	mdiCartCheck,
	mdiInvoiceTextOutline,
	mdiHandCoinOutline
} from "@mdi/js";

export const dashboardDisplayData = [
	{
		title: "Pendapatan",
		icon: mdiCurrencyUsd,
		value: "Rp.15.300.000",
	},
	{
		title: "Pajak",
		icon: mdiInvoiceTextOutline,
		value: "Rp.2.504.100",
	},
	{	
		title: "Tips",
		icon: mdiHandCoinOutline,
		value: "Rp.478.300"
	},
	{
		title: "Produk Terjual",
		icon: mdiBasketCheckOutline,
		value: 583,
	},
	{
		title: "Total Pesanan",
		icon: mdiCartCheck,
		value: 203,
	},
];
