import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	keyword: "",
	date: ""
};

export const historySlice = createSlice({
	name: "history",
	initialState,
	reducers: {
		addHistory: (state, action) => {
			const { payload } = action;
			state.data = payload;
		},
		setKeyword: ( state, action ) => {
			const { payload } = action;
			state.keyword = payload;
		},
		setDate: ( state, action ) => {
			const { payload } = action;
			state.date = payload;
		}
	},
});

export const { addHistory, setKeyword, setDate } = historySlice.actions;
export const getAllHistory = state => state.history.data;
export const getKeyword = state => state.history.keyword;
export const getDate = state => state.history.date;

export default historySlice;