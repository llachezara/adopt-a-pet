import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "../../hooks/useForm";

export default function Logout() {
    const [showPassword, setShowPassword] = useState(false);
    const { values, onChangeHandler, onBlurHandler, onFocusHandler, onSubmitCheckValues, inputErrors, submitButtonEnabledState, clearFormValues } = useForm({
        email: "",
        password: ""
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const inputErrorsExist = onSubmitCheckValues();
        if (inputErrorsExist) {
            return
        }

        clearFormValues();
        console.log("Login");
    }

    return (
        <div className="login-main-container">
            <main className="login-main">
                <div className="login-form-container">
                    <form action="#" className="login-form" onSubmit={onSubmitHandler}>
                        <h3 className="form-heading login-form-heading">Login</h3>
                        <div className="field">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={onChangeHandler}
                                onBlur={onBlurHandler}
                                onFocus={onFocusHandler}
                            />
                            {inputErrors["email"] && inputErrors["email"].showError ?
                                <span className="invalid-input-error">{inputErrors["email"].currentError}</span>
                                :
                                <span className="helper-info">example: john.doe@gmail.com</span>
                            }
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className="eye-input-icon"
                                onClick={() => setShowPassword(prevState => !prevState)}
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={onChangeHandler}
                                onBlur={onBlurHandler}
                                onFocus={onFocusHandler}
                            />
                            {inputErrors["password"] && inputErrors["password"].showError ?
                                <span className="invalid-input-error">{inputErrors["password"].currentError}</span>
                                :
                                <span className="helper-info">
                                    minimum 6 characters, letters and numbers, at least 1 special
                                    character
                                </span>
                            }
                        </div>
                        <button className={`form-button ${submitButtonEnabledState ? "" : "form-button-disabled"}`} disabled={!submitButtonEnabledState} id="sign-in-button">
                            Sign in
                        </button>
                        <p className="login-additional-info">
                            Don't have an account?
                            <span>
                                <Link to="/auth/register" className="span-link">Sign up</Link>
                            </span>
                        </p>
                    </form>
                    <div className="login-image-container" />
                </div>
            </main>
        </div>
    )
}