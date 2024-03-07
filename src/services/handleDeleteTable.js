import Swal from "sweetalert2";
import { deleteTable, getTables } from "./tables";
import { sortDatas } from "@/utils/sortDatas";
import { setTableDatas } from "@/features/table/tableSlice";

const handleRefresh = async (dispatch) => {
    const response = await getTables();
    const sortedTables = sortDatas(response.message);
    dispatch(setTableDatas(sortedTables));
};

export const handleDeleteTable = async (dispatch, id) => {
    Swal.fire({
        title: "Menunggu",
        text: "Sedang memproses pesanan...",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
    });

    try {
        const response = await deleteTable(id);
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