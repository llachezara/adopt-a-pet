import { useState } from "react";
import { useInputErrors } from "./useInputErrors";

export function useForm(initialValues){
    const [formValues, setFormValues] = useState(initialValues);
    const [changedInput, setChangedInput] = useState({ inputName: '', inputValue: '' });
    const [inputErrors, setInputErrors] = useInputErrors(formValues, changedInput);

    const onChangeHandler = (e) => {
        setFormValues(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        });

        console.log({ inputName: e.target.name, inputValue: e.target.value });
        setChangedInput(state => ({ inputName: e.target.name, inputValue: e.target.value }));
    }

    const onFocusHandler = (e) => {
        if (!inputErrors[e.target.name]) {
            return
        }
        setInputErrors({[e.target.name]: {currentError: inputErrors[e.target.name].currentError, showError: false}});
    }

    const onBlurHandler = (e) =>{
        if (!inputErrors[e.target.name]) {
            return
        }
        setInputErrors({[e.target.name]: {currentError: inputErrors[e.target.name].currentError, showError: true}});
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