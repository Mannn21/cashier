import Swal from "sweetalert2";
import { postMenus, getMenus } from "./menus";
import { setInventoryData } from "@/features/inventory/inventorySlice";
import { setAddInventoryModal } from "@/features/modal/modalSlice";

const handleInventory = async (dispatch) => {
    const datas = await getMenus();
    dispatch(setInventoryData(datas))
}

export const handlePostInventory = async (dispatch, image, nameRef, priceRef, discountRef, stockRef, detailsRef, categoryRef) => {
    const formData = new FormData();
    formData.append('name', nameRef.current.value);
    formData.append('price', priceRef.current.value);
    formData.append('discount', discountRef.current.value);
    formData.append('stock', stockRef.current.value);
    formData.append('details', detailsRef.current.value);
    formData.append('category', categoryRef.current.value);
    formData.append('image', image)
    Swal.fire({
        title: "Menunggu",
        text: "Sedang memproses pesanan...",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
    });

    try {
        const response = await postMenus(formData, categoryRef.current.value);
        if (response.status === "Ok") {
            dispatch(setAddInventoryModal(false));
            handleInventory(dispatch)
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
}
