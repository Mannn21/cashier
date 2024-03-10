import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	keyword: "",
	filter: ""
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
		setEmployeesFilter: (state, action) => {
			const { payload } = action;
			state.filter = payload;
		}
	},
});

export const { setEmployeesList, setEmployeesKeyword, setEmployeesFilter } = employeeSlice.actions;
export const getEmployeesList = state => state.employee.data;
export const getEmployeesKeyword = state => state.employee.keyword;
export const getEmployeesFilter = state => state.employee.filter;

export default employeeSlice;
