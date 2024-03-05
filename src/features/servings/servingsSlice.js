import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	keyword: "",
};

export const servingsSlice = createSlice({
	name: "servings",
	initialState,
	reducers: {
		addServings: (state, action) => {
			const { payload } = action;
			state.data = payload;
		},
		deleteServings: (state, action) => {
			const { payload } = action;
		},
		setKeyword: (state, action) => {
			const { payload } = action;
			state.keyword = payload;
		},
	},
});

export const { addServings, deleteServings, setKeyword } =
	servingsSlice.actions;

export const getAllServings = state => state.servings.data;
export const getKeywordState = state => state.servings.keyword;

export default servingsSlice;
