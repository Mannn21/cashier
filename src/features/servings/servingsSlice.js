import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

export const servingsSlice = createSlice({
    name: "servings",
    initialState,
    reducers: {
        addServings: (state, action) => {
            const {payload} = action;
        },
        deleteServings: (state, action) => {
            const {payload} = action;
        }
    }
})

export const { addServings, deleteServings } = servingsSlice.actions;

export const getAllServings = state => state.servings.data;

export default servingsSlice;