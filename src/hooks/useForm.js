import { useState } from "react";
import { useInputErrors } from "./useInputErrors";

export function useForm(initialValues){
    const [formValues, setFormValues] = useState(initialValues);
    const [inputErrors, checkInputValue, setInputErrors] = useInputErrors(formValues);

    const onChangeHandler = (e) => {

        setFormValues(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        })
    }

    const onFocusHandler = (e) => {
        if (!inputErrors[e.target.name]) {
            return
        }
        setInputErrors({[e.target.name]: {currentError: inputErrors[e.target.name].currentError, showError: false}});
    }

    const onBlurHandler = (e) =>{
        const {inputName, currentError} = checkInputValue(e.target.name, e.target.value);

        if(currentError){
            return setInputErrors({[inputName]: {currentError, showError: true}});
        }
        setInputErrors({[inputName]: null});
    }
    
    const onSubmitHandler = (e) =>{
        e.preventDefault();
    }

    return {
        values: formValues,
        onChangeHandler,
        onBlurHandler,
        onFocusHandler,
        onSubmitHandler,
        inputErrors
    }
}