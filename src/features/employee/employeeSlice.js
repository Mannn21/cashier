import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	keyword: "",
	sort: ""
};

export const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		setEmployeesList: (state, action) => {
			const { payload } = action;
			state.data = payload;
		},
		setEmployeesKeyword: (state, action) => {
			const { payload } = action;
			state.keyword = payload;
		},
		setEmployeesSort: (state, action) => {
			const { payload } = action;
			state.sort = payload;
		}
	},
});

export const { setEmployeesList, setEmployeesKeyword, setEmployeesSort } = employeeSlice.actions;
export const getEmployeesList = state => state.employee.data;
export const getEmployeesKeyword = state => state.employee.keyword;
export const getEmployeesSort = state => state.employee.sort;

export default employeeSlice;
