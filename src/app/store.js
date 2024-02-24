import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "@/features/cart/cartSlice"
import filterSlice from "@/features/filter/filterSlice"
import inventorySlice from "@/features/inventory/inventorySlice"

export default configureStore({
    reducer: {
        cart: cartSlice.reducer,
        filter: filterSlice.reducer,
        inventory: inventorySlice.reducer,
    }
})