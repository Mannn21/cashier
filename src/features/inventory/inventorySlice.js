import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    categoryFilter: "semua",
    priceSort: "default",
    stockSort: "default",
    discountSort: "default",
    keyword: ""
}

export const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        setInventoryData: (state, action) => {
            const {payload} = action;
            state.data = payload;
        },
        setCategoryFilter: (state, action) => {
            const {payload} = action;
            state.categoryFilter = payload;
        },
        setPriceSort: (state, action) => {
            const {payload} = action;
            state.priceSort = payload;
        },
        setStockSort: (state, action) => {
            const {payload} = action;
            state.stockSort = payload;
        },
        setDiscountSort: (state, action) => {
            const {payload} = action;
            state.discountSort = payload;
        },
        setKeyword: (state, action) => {
            const { payload } = action;
            state.keyword = payload;
        }
    }
})

export const { setInventoryData, setCategoryFilter, setPriceSort, setStockSort, setDiscountSort, setKeyword } = inventorySlice.actions;
export const getAllInventoriesData = state => state.inventory.data;
export const getCategoryFilterState = state => state.inventory.categoryFilter;
export const getPriceSortState = state => state.inventory.priceSort;
export const getStockSortState = state => state.inventory.stockSort;
export const getDiscountSortState = state => state.inventory.discountSort;
export const getKeywordState = state => state.inventory.keyword;

export default inventorySlice;