import { useState } from "react"

export function useInputErrors(formValues) {
    const [inputErrors, setErrors] = useState({});

    const checkInputValue = (inputName, inputValue) => {
        let currentError = null;

        const isInputValueValid = validateInput(inputName, inputValue);
        if (!isInputValueValid) {
            currentError = errors[inputName];
        }

        return {
            inputName,
            currentError
        }
    }

    const setInputErrors = (state) => {

        setErrors(oldState => ({
            ...oldState,
            ...state
        }))
    }

    return [
        inputErrors,
        checkInputValue,
        setInputErrors
    ]
}


function validateInput(inputName, inputValue) {
    const pattern = new RegExp(regex[inputName]);
    return pattern.test(inputValue);
}

const errors = {
    "email": "Invalid email address.",
    "password": "Password is not valid.",
}

const regex = {
    "email": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
    "password": "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{6,}$"
}