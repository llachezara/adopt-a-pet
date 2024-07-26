import { useState } from "react";

export function useForm(initialValues){
    const [formValues, setFormValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setFormValues(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
    }

    return {
        values: formValues,
        onChangeHandler,
        onSubmitHandler
    }
}