import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	keyword: "",
	employeeModal: false
};

export const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		setDataEmployee: (state, action) => {
			const { payload } = action;
			state.data = payload;
		},
		setEmployeesKeyword: (state, action) => {
			const { payload } = action;
			state.keyword = payload;
		},
		setEmployeeModal: (state, action) => {
			const { payload } = action;
			state.employeeModal = payload;
		}
	},
});

export const { setDataEmployee, setEmployeesKeyword, setEmployeeModal } = employeeSlice.actions;
export const getEmployeesList = state => state.employee.data;
export const getEmployeesKeyword = state => state.employee.keyword;
export const getEmployeeModalState = state => state.employee.employeeModal;

export default employeeSlice;
