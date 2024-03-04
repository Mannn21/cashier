import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	filterCategory: "semua meja",
	statusTable: "semua"
};

export const tableSlice = createSlice({
	name: "table",
	initialState,
	reducers: {
		setFilterCategory: (state, action) => {
			const { payload } = action;
			state.filterCategory = payload;
		},
		setTableDatas: (state, action) => {
			const { payload } = action;
			state.data = payload;
		},
		setStatusTable: (state, action) => {
			const { payload } = action;
			state.statusTable = payload;
		}
	},
});

export const { setFilterCategory,setTableDatas, setStatusTable } = tableSlice.actions;
export const getFilterCategory = state => state.table.filterCategory;
export const getAllTables = state => state.table.data;
export const getStatusTable = state => state.table.statusTable;

export default tableSlice;