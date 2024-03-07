import Swal from "sweetalert2"
import { postTable } from "./tables";
import { setAddTableModal } from "@/features/modal/modalSlice";
import { getTables } from "./tables";
import { sortDatas } from "@/utils/sortDatas";
import { setTableDatas } from "@/features/table/tableSlice";

const handleTables = async (dispatch) => {
    const datas = await getTables();
    const sortedTables = sortDatas(datas.message);
    dispatch(setTableDatas(sortedTables));
};

export const handlePostTable = async (dispatch, categoryRef, capacityRef, nameRef) => {
    let category;
    if (categoryRef.current.value === "private") {
        category = "private";
    } else if (categoryRef.current.value === "public") {
        if (parseInt(capacityRef.current.value) === 1) {
            category = "personal";
        } else if (parseInt(capacityRef.current.value) === 2) {
            category = "couple";
        } else if (
            parseInt(capacityRef.current.value) > 2 &&
            parseInt(capacityRef.current.value) <= 8
        ) {
            category = "family";
        } else {
            category = "party";
        }
    }
    const data = {
        name: nameRef.current.value,
        capacity: parseInt(capacityRef.current.value),
        category,
    };


    Swal.fire({
        title: "Menunggu",
        text: "Sedang memproses pesanan...",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
    });

    try {
        const response = await postTable(data);
        if (response.status === "Ok") {
            dispatch(setAddTableModal(false));
            handleTables(dispatch);
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