import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filterId: 1
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilterId: (state, action) => {
            const {payload} = action;
            state.filterId = payload;
        }
    }
})

export const { setFilterId } = filterSlice.actions;
export const getFilterId = state => state.filter.filterId;

export default filterSlice;