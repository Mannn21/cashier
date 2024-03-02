import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
	paymentModal: false,
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setModal: (state, action) => {
			const { payload } = action;
			state.isOpen = payload;
		},
		setPaymentModal: (state, action) => {
			const { payload } = action;
			state.paymentModal = payload;
		},
	},
});

export const { setModal, setPaymentModal } = modalSlice.actions;
export const getModalState = state => state.modal.isOpen;
export const getPaymentModalState = state => state.modal.paymentModal;

export default modalSlice;
