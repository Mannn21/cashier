import Swal from "sweetalert2";
import { checkOrder } from "./orders";

export const handlePostServings = async (id, fetchData) => {
    Swal.fire({
        title: "Menunggu",
        text: "Sedang memproses pesanan...",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
    });

    try {
        const res = await checkOrder(id);
        if (res.status === "Ok") {
            fetchData();
            Swal.fire({
                icon: "success",
                timer: 3000,
                timerProgressBar: true,
                title: "Sukses!",
                text: res.message,
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