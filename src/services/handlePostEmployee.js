import Swal from "sweetalert2";
import { postEmployee, getEmployees } from "./employees";
import { setEmployeesList } from "@/features/employee/employeeSlice";
import { setAddEmployeeModal } from "@/features/modal/modalSlice";

const handleRefresh = async (dispatch) => {
    const datas = await getEmployees();
    dispatch(setEmployeesList(datas.message))
}

export const handlePostEmployee = async (dispatch, image, userId, nameRef, emailRef, addressRef, ageRef, confPasswordRef, passwordRef, roleRef, salaryRef) => {
    const formData = new FormData();
    formData.append('name', nameRef.current.value);
    formData.append('email', emailRef.current.value);
    formData.append('userId', userId)
    formData.append('address', addressRef.current.value);
    formData.append('age', ageRef.current.value);
    formData.append('password', passwordRef.current.value);
    formData.append('confPassword', confPasswordRef.current.value);
    formData.append('role', roleRef.current.value);
    formData.append('salary', salaryRef.current.value);
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
        const response = await postEmployee(formData);
        if (response.status === "Ok") {
            dispatch(setAddEmployeeModal(false));
            handleRefresh(dispatch)
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
