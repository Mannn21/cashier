import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    filterInventoryId: 1
}

export const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        setInventoryData: (state, action) => {
            const {payload} = action;
            state.data = payload;
        },
        setFilterInventoryId: (state, action) => {
            const {payload} = action;
            state.filterInventoryId = payload;
        }
    }
})

export const { setInventoryData, setFilterInventoryId } = inventorySlice.actions;
export const getAllInventoriesData = state => state.inventory.data;
export const getFilterInventoryId = state => state.inventory.filterInventoryId;

export default inventorySlice;