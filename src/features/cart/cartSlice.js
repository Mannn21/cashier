import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    orders: [],
    total_price: null,
    total_items: null,
    total_discount: null,
    id_tables: "",
    name: "",
    date: "",
    status: false,
    time_order: "",
    cashier_id: "",
    message: ""
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

        }      
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice;