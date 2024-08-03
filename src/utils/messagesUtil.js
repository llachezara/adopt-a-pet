import { toast, Zoom } from 'react-toastify';

export const showSuccessMessage = (message) => {
    toast(`${message}`, {
        position: "top-center",
        theme: "light",
        type: "success",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: false,
        hideProgressBar: true,
        transition: Zoom
    })
};

export const showErrorMessage = (message) => {
    toast(`${message}`, {
        position: "top-center",
        theme: "colored",
        type: "error",
        autoClose: 3500,
        closeOnClick: true,
        pauseOnHover: false,
        hideProgressBar: true
    })
};