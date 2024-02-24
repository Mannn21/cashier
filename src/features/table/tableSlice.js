import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tableId: 1
}

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setTableId: (state, action) => {
            const {payload} = action;
            state.tableId = payload;
        }
    }
})

export const { setTableId } = tableSlice.actions;
export const getTableId = state => state.table.tableId;

export default tableSlice;