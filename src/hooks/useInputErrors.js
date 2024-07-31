import { useEffect, useState } from "react"

export function useInputErrors(formValues, changedInput) {
    const initialErrorsState = {};
    for (const key in formValues) {
        initialErrorsState[key] = { currentError: errorsForRequiredFields[key] || null, showError: false }
    }

    const [inputErrors, setErrors] = useState(initialErrorsState);
    console.log(inputErrors);

    useEffect(() => {

        if (changedInput.submittedValues) {

            const currentErrors = checkSubmittedValues(formValues);
            return setInputErrors(currentErrors);
        }

        if (changedInput.inputName != "") {

            const { currentError, moreErrors} = checkInputValue(changedInput.inputName, changedInput.inputValue);

            setInputErrors({ 
                [changedInput.inputName]: currentError ? { currentError, showError: false } : { currentError: null, showError: false }, 
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

            if (formValues[inputName] == "" && !isInputValueValid) {
                currentError = errorsForRequiredFields[inputName] || null;
            }

            currentErrors[inputName] = currentError ? { currentError, showError: true } : { currentError: null, showError: false }
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
        return formValues[inputName] == formValues["password"] && formValues[inputName] != "";
    }

    if (!regex(inputName, formValues)) {
        return true;
    }

    const pattern = new RegExp(regex(inputName));
    return pattern.test(inputValue);
}

const errors = {
    "email": "Invalid email address.",
    "password": "Password is not in the correct format.",
    "repassword": "Passwords must match.",
    "name": "Name must be maximum 15 characters.",
    "breed": "Breed must be maximum 50 characters.",
    "age": "Age must be maximum 20 characters.",
    "imageUrl": "Invalid image URL.",
    "personality": "Personality description must be maximum 40 characters.",
    "background": "Pet's background must be maximum 200 characters."
}


const errorsForRequiredFields = {
    "email": "Email is required.",
    "password": "Password is required.",
    "repassword": "Repassword is required.",
    "breed": "Breed is required.",
    "age": "Age is required."
}

const regex = (inputName) => {
    const patterns = {
        "email": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        "password": "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{6,}$",
        "name": "^.{1,15}$",
        "breed": "^.{1,50}$",
        "age": "^.{1,20}$",
        "imageUrl": "^(https?:\\/\\/.*\\.(?:png|jpg|jpeg|gif|bmp|svg))$",
        "personality": "^.{1,40}$",
        "background": "^.{1,200}$"
    }

    return patterns[inputName];
}