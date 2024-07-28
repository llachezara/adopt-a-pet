import { useEffect, useState } from "react"

export function useInputErrors(formValues, changedInput) {
    const initialErrorsState = {};
    for (const key in formValues) {
        initialErrorsState[key] = { currentError: errorsForRequiredFields[key], showError: false }
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

        if (inputValue == "") {
            currentError = errorsForRequiredFields[inputName];
            return {
                inputName,
                currentError
            }
        }
        const isInputValueValid = validateInput(inputName, inputValue, formValues);

        if (!isInputValueValid) {
            currentError = errors[inputName];
        }

        if (inputName == "password" && formValues["repassword"]) {
            const isRepasswordValid = validateInput("repassword", formValues["repassword"], formValues);

            if (isRepasswordValid && isInputValueValid) {
                console.log("BOTH VALID*");
                return {
                    inputName,
                    currentError,
                    moreErrors: { "repassword": null }
                }
            } else if (!isRepasswordValid && isInputValueValid) {
                console.log("REPASS NOT, PASS VALID*");
                return {
                    inputName,
                    currentError,
                    moreErrors: { "repassword": { currentError: errors["repassword"], showError: true } }
                }
            } else if (isRepasswordValid && !isInputValueValid) {
                console.log("REPASS VALID, PASS NOT*")
                return {
                    inputName,
                    currentError,
                    moreErrors: { "repassword": { currentError: errors["repassword"], showError: false } }
                }
            } else if (!isRepasswordValid && !isInputValueValid) {
                console.log("BOTH NOT VALID*");
                return {
                    inputName,
                    currentError,
                    moreErrors: { "repassword": { currentError: errors["repassword"], showError: true } }
                }
            } else {
                throw new Error("In useInputErrors when checking password.")
            }
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
    if (inputName == "repassword") {
        return formValues[inputName] == formValues["password"];
    }

    if (!regex(inputName, formValues)) {
        throw new Error(`Input with ${inputName} does not exist in regex Object, used in validateInput function.`)
    }

    const pattern = new RegExp(regex(inputName));
    return pattern.test(inputValue);
}

const errors = {
    "email": "Invalid email address.",
    "password": "Password is not in the correct format.",
    "repassword": "Passwords must match."
}


const errorsForRequiredFields = {
    "email": "Email is required.",
    "password": "Password is required.",
    "repassword": "Repassword is required."
}

const regex = (inputName) => {
    const patterns = {
        "email": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        "password": "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{6,}$"
    }

    return patterns[inputName];
}