import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isCheckOutModalOpen: false,
	paymentModal: false,
	isAddTableModal: false,
	isAddInventoryModal: false
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
		},
		setAddInventoryModal: (state, action) => {
			const { payload } = action;
			state.isAddInventoryModal = payload;
		}
	},
});

export const { setCheckOutModalModal, setPaymentModal, setAddTableModal, setAddInventoryModal } = modalSlice.actions;
export const getCheckOutModalState = state => state.modal.isCheckOutModalOpen;
export const getPaymentModalState = state => state.modal.paymentModal;
export const getAddTableModal = state => state.modal.isAddTableModal
export const getAddInventoryModal = state => state.modal.isAddInventoryModal;

export default modalSlice;
