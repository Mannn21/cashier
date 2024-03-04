import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    filterTableId: 1
}

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setFilterTableId: (state, action) => {
            const {payload} = action;
            state.filterTableId = payload;
        }
    }
})

export const { setFilterTableId } = tableSlice.actions;
export const getFilterTableId = state => state.table.filterTableId;

export default tableSlice;