import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-heading">404</h1>
            <div className="not-found-info">
                <p>Oops! The page you are looking for does not exist.</p>
                <Link to="/" className="not-found-button">Go back to home</Link>
            </div>
        </div>
    )
}