import {
	mdiCurrencyUsd,
	mdiBasketCheckOutline,
	mdiCartCheck,
	mdiInvoiceTextOutline,
	mdiHandCoinOutline
} from "@mdi/js";

export const dashboardDisplayData = [
	{
		name: "total_prices",
		title: "Pendapatan",
		icon: mdiCurrencyUsd,
		value: "Rp.15.300.000",
	},
	{
		name: "total_taxes",
		title: "Pajak",
		icon: mdiInvoiceTextOutline,
		value: "Rp.2.504.100",
	},
	{	
		name: "total_income",
		title: "Bersih",
		icon: mdiHandCoinOutline,
		value: "Rp.478.300"
	},
	{
		name: "total_items",
		title: "Produk Terjual",
		icon: mdiBasketCheckOutline,
		value: 583,
	},
	{
		name: "total_orders",
		title: "Total Pesanan",
		icon: mdiCartCheck,
		value: 203,
	},
];
