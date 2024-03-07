import Swal from "sweetalert2";
import { deleteMenu, getMenus } from "./menus";
import { setInventoryData } from "@/features/inventory/inventorySlice";

const handleRefresh = async (dispatch) => {
    const menus = await getMenus();
    dispatch(setInventoryData(menus));
};

export const handleDeleteInventory = async (dispatch, id, category) => {
    Swal.fire({
        title: "Menunggu",
        text: "Sedang memproses pesanan...",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
    });

    try {
        const response = await deleteMenu(id, category);
        if (response.status === "Ok") {
            handleRefresh(dispatch);
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