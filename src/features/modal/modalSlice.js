import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isCheckOutModalOpen: false,
	paymentModal: false,
	isAddTableModal: false
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setCheckOutModalModal: (state, action) => {
			const { payload } = action;
			state.isCheckOutModalOpen = payload;
		},
		setPaymentModal: (state, action) => {
			const { payload } = action;
			state.paymentModal = payload;
		},
		setAddTableModal: (state, action) => {
			const { payload } = action;
			state.isAddTableModal = payload;
		}
	},
});

export const { setCheckOutModalModal, setPaymentModal, setAddTableModal } = modalSlice.actions;
export const getCheckOutModalState = state => state.modal.isCheckOutModalOpen;
export const getPaymentModalState = state => state.modal.paymentModal;
export const getAddTableModal = state => state.modal.isAddTableModal

export default modalSlice;
