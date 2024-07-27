import { useState } from "react"

export function useInputErrors(formValues) {
    const initialErrorsState = {};
    for (const key in formValues) {
        initialErrorsState[key] = {currentError: errors[key], showError: false}
    }

    const [inputErrors, setErrors] = useState(initialErrorsState);

    const checkInputValue = (inputName, inputValue) => {
        let currentError = null;

        const isInputValueValid = validateInput(inputName, inputValue, formValues);
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


function validateInput(inputName, inputValue, formValues) {
    if (!regex(inputName, formValues)) {
        throw new Error(`Input with ${inputName} does not exist in regex Object, used in validateInput function.`)
    }
    const pattern = new RegExp(regex(inputName, formValues));
    return pattern.test(inputValue);
}

const errors = {
    "email": "Invalid email address.",
    "password": "Password is not valid.",
    "repassword": "Passwords must match."
}

const regex = (inputName, formValues) => {
    const patterns = {
        "email": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        "password": "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{6,}$",
        "repassword": formValues.password || "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{6,}$"
    }

    return patterns[inputName];
}