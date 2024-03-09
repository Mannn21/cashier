import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	keyword: ""
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
		}
	},
});

export const { setEmployeesList, setEmployeesKeyword, setEmployeeModal } = employeeSlice.actions;
export const getEmployeesList = state => state.employee.data;
export const getEmployeesKeyword = state => state.employee.keyword;

export default employeeSlice;
