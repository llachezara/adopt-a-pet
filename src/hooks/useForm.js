import { useState } from "react";

import { useInputErrors } from "./useInputErrors";
import { useSubmitButton } from "./useSubmitButton";

export function useForm(initialValues, option) {
    const [formValues, setFormValues] = useState(initialValues);
    const [changedInput, setChangedInput] = useState({ inputName: '', inputValue: '' });
    const [inputErrors, setInputErrors] = useInputErrors(formValues, changedInput, option);
    const [submitButtonEnabledState] = useSubmitButton(inputErrors);

    const onChangeHandler = (e) => {
        setFormValues(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        });

        // console.log({ inputName: e.target.name, inputValue: e.target.value });
        setChangedInput(state => ({ inputName: e.target.name, inputValue: e.target.value }));
    }

    const onFocusHandler = (e) => {
        if (!inputErrors[e.target.name]) {
            return
        }
        setInputErrors({ [e.target.name]: { currentError: inputErrors[e.target.name].currentError, showError: false } });
    }

    const onBlurHandler = (e) => {
        if (!inputErrors[e.target.name]) {
            return
        }
        setInputErrors({ [e.target.name]: { currentError: inputErrors[e.target.name].currentError, showError: true } });
    }

    const onSubmitCheckValues = () => {

        setChangedInput(state => ({
            submittedValues: formValues
        }));
        const inputErrorsExist = Object.values(inputErrors).some(errorObject => errorObject.currentError != null);

        return inputErrorsExist;
    }

    const clearFormValues = () => {
        const clearedValues = {};
        for (let inputName in formValues) {
            clearedValues[inputName] = "";
        }
        
        setFormValues(clearedValues);
        setChangedInput(state => ({
            clearedValues: true
        }))
    }

    const setValues = (state) => {
        setFormValues(oldState => ({
            ...oldState,
            ...state
        }))
    }
    return {
        values: formValues,
        onChangeHandler,
        onBlurHandler,
        onFocusHandler,
        onSubmitCheckValues,
        inputErrors,
        submitButtonEnabledState,
        clearFormValues,
        setValues
    }
}