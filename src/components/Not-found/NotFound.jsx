import { Link } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {
    return (
        <div class="not-found-container">
            <h1 class="not-found-heading">404</h1>
            <div class="not-found-info">
                <p>Oops! The page you are looking for does not exist.</p>
                <Link to="/" class="not-found-button">Go back to home</Link>
            </div>
        </div>
    )
}