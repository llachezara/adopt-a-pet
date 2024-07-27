import { useEffect, useState } from "react"

export function useInputErrors(formValues, changedInput) {
    const initialErrorsState = {};
    for (const key in formValues) {
        initialErrorsState[key] = { currentError: errors[key], showError: false }
    }

    const [inputErrors, setErrors] = useState(initialErrorsState);

    useEffect(() => {

        if (changedInput.submittedValues) {

            const currentErrors = checkSubmittedValues(formValues);
            return setInputErrors(currentErrors);
        }

        if (changedInput.inputName != "") {

            const { currentError, moreErrors} = checkInputValue(changedInput.inputName, changedInput.inputValue);
            setInputErrors({ 
                [changedInput.inputName]: currentError ? { currentError, showError: false } : null, 
                ...moreErrors
            });
        }
    }, [changedInput]);

    const checkInputValue = (inputName, inputValue) => {
        let currentError = null;

        const isInputValueValid = validateInput(inputName, inputValue, formValues);

        if (inputName == "password" && formValues["repassword"]) {
            const isRepasswordValid = validateInput("repassword", formValues["repassword"], formValues);

            if (isRepasswordValid && isInputValueValid) {
                return {
                    inputName,
                    currentError,
                    moreErrors: { "repassword": null }
                }
            } else if (!isRepasswordValid && isInputValueValid) {
                return {
                    inputName,
                    currentError,
                    moreErrors: { "repassword": { currentError: errors["repassword"], showError: true } }
                }
            }
        }
        if (!isInputValueValid) {
            currentError = errors[inputName];
        }

        return {
            inputName,
            currentError
        }
    }

    const checkSubmittedValues = (formValues) => {
        const currentErrors = {};
        for (const inputName in formValues) {
            let currentError = null;
            const isInputValueValid = validateInput(inputName, formValues[inputName], formValues);

            if (!isInputValueValid) {
                currentError = errors[inputName];
            }

            currentErrors[inputName] = currentError ? { currentError, showError: true } : null;
        }

        return currentErrors;
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
    "password": "Password is not in the correct format.",
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