import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {
		orders: [],
		total_price: null,
		total_items: null,
		total_discount: null,
		total_orders: null,
		total_taxes: null,
		id_tables: "",
		name: "",
		date: "",
		status: false,
		time_order: "",
		cashier_id: "",
	},
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		setOrder: (state, action) => {
            const { payload } = action;
            state.data.orders = payload.orders;
            state.data.total_price = payload.total_price;
            state.data.total_items = payload.total_items;
            state.data.total_discount = payload.total_discount;
			state.data.total_orders = payload.total_orders;
			state.data.total_taxes = payload.total_items * 150;
        },
	},
});

export const { setOrder } = orderSlice.actions;
export const getOrderData = state => state.order.data;

export default orderSlice;
