import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    category: "all menus",
    keyword: ""
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilterCategory: (state, action) => {
            const {payload} = action;
            state.category = payload;
        },
        setFilterKeyword: (state, action) => {
            const {payload} = action;
            state.keyword = payload;
        }
    }
})

export const { setFilterCategory, setFilterKeyword } = filterSlice.actions;
export const getFilterCategory = state => state.filter.category;
export const getFilterKeyword = state => state.filter.keyword;

export default filterSlice;