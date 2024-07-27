import { useEffect, useState } from "react";

export function useSubmitButton(inputErrors) {
    const [submitButtonEnabledState, setSubmitButtonEnabledState] = useState(false);

    useEffect(()=>{
        const buttonState = checkSubmitButtonState(inputErrors);
        setSubmitButtonEnabledState(oldButtonState => buttonState);
    }, [inputErrors]);

    return [
        submitButtonEnabledState
    ]
}

function checkSubmitButtonState(inputErrors){
    // console.log("Submit button state: ", !Object.values(inputErrors).some(errorObject => errorObject != null))
    return !Object.values(inputErrors).some(errorObject => errorObject != null);
}