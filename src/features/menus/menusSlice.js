import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
}

export const menusSlice = createSlice({
    name: "menus",
    initialState,
    reducers: {
        setMenus: (state, action) => {
            const {payload} = action;
            state.data = payload;
        }
    }
})

export const { setMenus } = menusSlice.actions;
export const getAllMenus = state => state.menus.data;

export default menusSlice;