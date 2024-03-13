import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isCheckOutModalOpen: false,
	paymentModal: false,
	isAddTableModal: false,
	isAddInventoryModal: false,
	isAddEmployeeModal: false
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setCheckOutModal: (state, action) => {
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
		},
		setAddEmployeeModal: (state, action) => {
			const { payload } = action;
			state.isAddEmployeeModal = payload;
		}
	},
});

export const { setCheckOutModal, setPaymentModal, setAddTableModal, setAddInventoryModal, setAddEmployeeModal } = modalSlice.actions;
export const getCheckOutModalState = state => state.modal.isCheckOutModalOpen;
export const getPaymentModalState = state => state.modal.paymentModal;
export const getAddTableModal = state => state.modal.isAddTableModal
export const getAddInventoryModal = state => state.modal.isAddInventoryModal;
export const getAddEmployeeModal = state => state.modal.isAddEmployeeModal;

export default modalSlice;
