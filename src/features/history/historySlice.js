import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: null,
};

export const historySlice = createSlice({
	name: "history",
	initialState,
	reducers: {
		addHistory: (state, action) => {
			const { payload } = action;
		},
	},
});

export const { addHistory } = historySlice.actions;
export const getAllHistory = state => state.history.data;

export default historySlice;