import { useEffect, useState } from "react"

export function useInputErrors(formValues, changedInput) {
    const initialErrorsState = {};
    for (const key in formValues) {
        initialErrorsState[key] = { currentError: errors[key], showError: false }
    }

    const [inputErrors, setErrors] = useState(initialErrorsState);

    useEffect(() => {

        if (changedInput.inputName != "") {
            console.log(changedInput.inputName);
            const { currentError } = checkInputValue(changedInput.inputName, changedInput.inputValue);
            setInputErrors({ [changedInput.inputName]: currentError ? { currentError, showError: false } : null });
        }
    }, [changedInput]);

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
        setInputErrors
    ]
}


function validateInput(inputName, inputValue, formValues) {
    if (!regex(inputName, formValues)) {
        throw new Error(`Input with ${inputName} does not exist in regex Object, used in validateInput function.`)
    }
    const pattern = new RegExp(regex(inputName));

    if (inputName == "repassword") {
        return pattern.test(inputValue) && formValues[inputName] == formValues["password"];
    }

    return pattern.test(inputValue);
}

const errors = {
    "email": "Invalid email address.",
    "password": "Password is not valid.",
    "repassword": "Passwords must match."
}

const regex = (inputName) => {
    const patterns = {
        "email": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        "password": "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{6,}$",
        "repassword": "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{6,}$"
    }

    return patterns[inputName];
}