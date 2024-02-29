import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    category: "all menus"
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilterCategory: (state, action) => {
            const {payload} = action;
            state.category = payload;
        },
        setFilterSearch: (state, action) => {
            const {payload} = action;
        }
    }
})

export const { setFilterCategory } = filterSlice.actions;
export const getFilterCategory = state => state.filter.category;

export default filterSlice;