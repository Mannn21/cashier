import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "@/features/cart/cartSlice"
import filterSlice from "@/features/filter/filterSlice"
import inventorySlice from "@/features/inventory/inventorySlice"
import tableSlice from "@/features/table/tableSlice"
import menusSlice from "@/features/menus/menusSlice"
import orderSlice from "@/features/order/orderSlice"
import modalSlice from "@/features/modal/modalSlice"

export default configureStore({
    reducer: {
        cart: cartSlice.reducer,
        menus: menusSlice.reducer,
        filter: filterSlice.reducer,
        inventory: inventorySlice.reducer,
        table: tableSlice.reducer,
        order: orderSlice.reducer,
        modal: modalSlice.reducer
    }
})