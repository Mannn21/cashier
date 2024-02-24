import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filterInventoryId: 1
}

export const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        setFilterInventoryId: (state, action) => {
            const {payload} = action;
            state.filterInventoryId = payload;
        }
    }
})

export const { setFilterInventoryId } = inventorySlice.actions;
export const getFilterInventoryId = state => state.inventory.filterInventoryId;

export default inventorySlice;