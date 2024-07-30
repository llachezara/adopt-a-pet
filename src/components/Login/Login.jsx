import { Link } from "react-router-dom";

export default function Logout() {
    return (
        <div className="login-main-container">
            <main className="login-main">
                <div className="login-form-container">
                    <form action="#" className="login-form">
                        <h3 className="form-heading login-form-heading">Login</h3>
                        <div className="field">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" />
                            <span className="helper-info">example: john.doe@gmail.com</span>
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                            <span className="helper-info">
                                minimum 6 characters, letters and numbers, at least 1 special
                                character
                            </span>
                        </div>
                        <button className="form-button" id="sign-in-button">
                            Sign in
                        </button>
                        <p className="login-additional-info">
                            Don't have an account?{" "}
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