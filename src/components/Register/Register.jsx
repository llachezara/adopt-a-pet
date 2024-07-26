import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="register-main-container">
            <main className="register-main">
                <div className="register-form-container">
                    <form className="register-form">
                        <h3 className="form-heading register-form-heading">Register</h3>
                        <div className="field">
                            <label htmlFor="email" className="required">Email Address</label>
                            <input type="email" id="email" name="email" />
                            <span className="helper-info">example: john.doe@gmail.com</span>
                        </div>
                        <div className="field">
                            <label htmlFor="password" className="required">Password</label>
                            <input type="password" id="password" name="password" />
                            <span className="helper-info">
                                minimum 6 characters, letters and numbers, at least 1 special
                                character
                            </span>
                        </div>
                        <div className="field">
                            <label htmlFor="repassword" className="required"> Repeat password</label>
                            <input type="password" id="repassword" name="repassword" />
                            <span className="helper-info">
                            </span>
                        </div>
                        <button className="form-button" id="sign-up-button">
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