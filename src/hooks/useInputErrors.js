import { useEffect, useState } from "react"

export function useInputErrors(formValues, changedInput) {
    const initialErrorsState = {};
    for (const key in formValues) {
        initialErrorsState[key] = { currentError: errorsForRequiredFields[key] || null, showError: false }
        if (key == "med-conditions-info") {
            initialErrorsState[key] = { currentError: null, showError: false }
        }
    }

    const [inputErrors, setErrors] = useState(initialErrorsState);
    // console.log(inputErrors);

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
                    moreErrors: { "repassword": { currentError: null, showError: false } }
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

        if (inputName == "med-conditions") {

            if (formValues["med-conditions"] == "No") {
                return {
                    inputName,
                    currentError,
                    moreErrors: { "med-conditions-info": { currentError: null, showError: false } }
                }
            }
            if (formValues["med-conditions"] == "Yes") {
                return {
                    inputName,
                    currentError,
                    moreErrors: { "med-conditions-info": { currentError: errorsForRequiredFields["med-conditions-info"], showError: false } }
                }
            }
        }
        return {
            inputName,
            currentError
        }
    }

    const checkSubmittedValues = (formValues) => {
        const currentErrors = {};
        const moreErrors = {};

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

            if (inputName == "med-conditions") {
                if (formValues["med-conditions"] == "No") {
                    moreErrors["med-conditions-info"] = { currentError: null, showError: false }
                }
            }
        }

        return {
            ...currentErrors,
            ...moreErrors
        };
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
    "background": "Pet's background must be maximum 200 characters.",
    "med-conditions-info": "Medical conditions description must be maximum 50 characters.",
    "owner-name": "Name must be maximum 40 characters.",
    "owner-phone": "Phone number must be in the correct format.",
    "owner-email": "Invalid email address."
}


const errorsForRequiredFields = {
    "email": "Email is required.",
    "password": "Password is required.",
    "repassword": "Repassword is required.",
    "breed": "Breed is required.",
    "age": "Age is required.",
    "med-conditions-info": "You must specify the medical conditions.",
    "owner-name": "Name is required.",
    "owner-phone": "Phone number is required.",
    "owner-email": "Email is required."
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
        "background": "^.{1,200}$",
        "med-conditions-info": "^.{1,150}$",
        "owner-name": "^.{1,40}$",
        "owner-phone": "^08[7-9]\\d{7}$",
        "owner-email": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
    }

    return patterns[inputName];
}