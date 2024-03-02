import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {
		orders: [],
		total_price: null,
		total_items: null,
		total_discount: null,
		total_orders: null,
	},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { payload } = action;
			const isMenusExists = state.data.orders.findIndex(
				menu => menu.id === payload.id
			);
			if (isMenusExists < 0) {
				state.data.orders.push({
					id: payload.id,
					name: payload.name,
					price: payload.price,
					discount: payload.discount,
					image_URI: payload.image_URI,
					quantity: 1,
					totalPrice: payload.price - (payload.discount / 100) * payload.price,
				});
				state.data.total_price +=
					payload.price - (payload.discount / 100) * payload.price;
				state.data.total_items += 1;
				state.data.total_discount += (payload.discount / 100) * payload.price;
				state.data.total_orders +=
					payload.price - (payload.discount / 100) * payload.price + 150;
			} else {
				state.data.orders[isMenusExists].quantity += 1;
				state.data.orders[isMenusExists].totalPrice =
					(payload.price - (payload.discount / 100) * payload.price) *
					state.data.orders[isMenusExists].quantity;
				state.data.total_price +=
					payload.price - (payload.discount / 100) * payload.price;
				state.data.total_discount += (payload.discount / 100) * payload.price;
				state.data.total_orders +=
					payload.price - (payload.discount / 100) * payload.price + 150;
				state.data.total_items += 1;
			}
		},
		removeFromCart: (state, action) => {
			const { payload } = action;
			const isMenusExists = state.data.orders.findIndex(
				menu => menu.id === payload.id
			);
			if (state.data.orders[isMenusExists].quantity >= 1) {
				state.data.orders[isMenusExists].quantity -= 1;
				state.data.orders[isMenusExists].totalPrice =
					(payload.price - (payload.discount / 100) * payload.price) *
					state.data.orders[isMenusExists].quantity;
				state.data.total_items -= 1;
				state.data.total_price -=
					payload.price - (payload.discount / 100) * payload.price;
				state.data.total_discount -= (payload.discount / 100) * payload.price;
				state.data.total_orders -=
					payload.price - (payload.discount / 100) * payload.price + 150;
			}
			if (state.data.orders[isMenusExists].quantity < 1) {
				state.data.orders.splice(isMenusExists, 1);
			}
		},
		deleteFromCart: (state, action) => {
			const { payload } = action;
			const isMenusExists = state.data.orders.findIndex(
				menu => menu.id === payload.id
			);
			state.data.total_items -= state.data.orders[isMenusExists].quantity;
			state.data.total_discount -=
				(payload.discount / 100) *
				payload.price *
				state.data.orders[isMenusExists].quantity;
			state.data.total_price -=
				(payload.price - (payload.discount / 100) * payload.price) *
				state.data.orders[isMenusExists].quantity;
			state.data.total_orders -=
				((payload.price - (payload.discount / 100) * payload.price) + 150) *
				state.data.orders[isMenusExists].quantity;
			state.data.orders.splice(isMenusExists, 1);
		},
	},
});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
export const getAllCarts = state => state.cart.data;

export default cartSlice;
