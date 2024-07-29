import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "../../hooks/useForm";
import { useRegister } from "../../hooks/auth-hooks/useRegister";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const { values, onChangeHandler, onBlurHandler, onFocusHandler, onSubmitCheckValues, inputErrors, submitButtonEnabledState, clearFormValues } = useForm({
        email: "",
        password: "",
        repassword: ""
    });
    const { register } = useRegister();
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const inputErrorsExist = onSubmitCheckValues();
        if (inputErrorsExist) {
            return
        }
        await register(values.email, values.password);
        clearFormValues();
        navigate("/");

    }

    return (
        <div className="register-main-container">
            <main className="register-main">
                <div className="register-form-container">
                    <form className="register-form" onSubmit={onSubmitHandler}>
                        <h3 className="form-heading register-form-heading">Register</h3>
                        <div className="field">
                            <label htmlFor="email" className="required">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                className={inputErrors["email"] && inputErrors["email"].showError ? "invalid" : ""}
                                onChange={onChangeHandler}
                                onBlur={onBlurHandler}
                                onFocus={onFocusHandler}
                            />
                            {inputErrors["email"] && inputErrors["email"].showError ? <span className="invalid-input-error">{inputErrors["email"].currentError}</span>
                                : <span className="helper-info">example: john.doe@gmail.com</span>}
                        </div>
                        <div className="field">
                            <label htmlFor="password" className="required">Password</label>
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className="eye-input-icon"
                                onClick={() => setShowPassword(prevState => !prevState)}
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className={inputErrors["password"] && inputErrors["password"].showError ? "invalid" : ""}
                                value={values.password}
                                onChange={onChangeHandler}
                                onBlur={onBlurHandler}
                                onFocus={onFocusHandler}
                            />
                            {inputErrors["password"] && inputErrors["password"].showError ? <span className="invalid-input-error">{inputErrors["password"].currentError}</span>
                                :
                                <span className="helper-info">
                                    minimum 6 characters, letters and numbers, at least 1 special
                                    character
                                </span>}
                        </div>
                        <div className="field">
                            <label htmlFor="repassword" className="required"> Repeat password</label>
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className="eye-input-icon"
                                onClick={() => setShowPassword(prevState => !prevState)}
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="repassword"
                                name="repassword"
                                value={values.repassword}
                                className={inputErrors["repassword"] && inputErrors["repassword"].showError ? "invalid" : ""}
                                onChange={onChangeHandler}
                                onBlur={onBlurHandler}
                                onFocus={onFocusHandler}
                            />
                            {inputErrors["repassword"] && inputErrors["repassword"].showError && <span className="invalid-input-error">{inputErrors["repassword"].currentError}</span>}
                        </div>
                        <button className={`form-button ${submitButtonEnabledState ? "" : "form-button-disabled"}`} disabled={!submitButtonEnabledState} id="sign-up-button">
                            SIGN UP
                        </button>
                        <div className="additional-info-container">
                            <p className="register-additional-info">
                                Have an account?{" "}
                                <span>
                                    <Link to="#">Sign in</Link>
                                </span>
                            </p>
                        </div>
                        <div className="register-image-container" />
                    </form>
                </div>
            </main>
        </div>)
}