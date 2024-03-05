"use client"

import {useDispatch } from "react-redux";
import { setAddTableModal } from "@/features/modal/modalSlice";
import Modal from "@/components/Modal/Modal";

const AddTableModal = () => {
    const dispatch = useDispatch()

    const handleCloseTableModal = () => {
        dispatch(setAddTableModal(false))
    }
    
    return (
        <Modal>
            <h1>Add Table Modal</h1>
            <button
				type="button"
				onClick={handleCloseTableModal}
				className="w-auto h-auto text-center px-2 py-1 text-color-primer text-lg font-semibold bg-color-accent rounded-md hover:bg-color-accentHover transition-all ease-in-out duration-300">
				Batal
			</button>
        </Modal>
    )
}

export default AddTableModal;