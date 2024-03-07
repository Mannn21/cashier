import Swal from "sweetalert2";
import { postOrderData } from "./orders";
import { setCheckOutModalModal } from "@/features/modal/modalSlice";
import { clearCart } from "@/features/cart/cartSlice";
import { getMenus } from "./menus";
import { setMenus } from "@/features/menus/menusSlice";

const handleMenus = async dispatch => {
    const menus = await getMenus();
    dispatch(setMenus(menus));
}

export const handlePostOrder = async (data, dispatch) => {
    Swal.fire({
        title: "Menunggu",
        text: "Sedang memproses pesanan...",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
    });

    try {
        const response = await postOrderData(data);
        if (response.status === "Ok") {
            dispatch(setCheckOutModalModal(false));
            dispatch(clearCart())
            handleMenus(dispatch);
            Swal.fire({
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                title: "Sukses!",
                text: response.message,
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ada kesalahan saat memproses pesanan.",
            });
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Terjadi kesalahan saat memposting pesanan.",
        });
    }
};