import './Sidebar.css';

export default function Sidebar(){
    return (
        <aside className="sidebar">
                    <form action="#" className="filter-form">
                        <div className="filter-label">Search</div>
                        <div className="form-field search">
                            <div className="field">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="filter-label">Filter by species</div>
                        <div className="form-field filter">
                            <ul className="filter-ul filter-species">
                                <li className="filter-li">
                                    <span>Cat</span>
                                    <input
                                        type="checkbox"
                                        name="input-for-species"
                                        className="filter-form-input"
                                    />
                                </li>
                                <li className="filter-li">
                                    <span>Dog</span>
                                    <input
                                        type="checkbox"
                                        name="input-for-species"
                                        className="filter-form-input"
                                    />
                                </li>
                                <li className="filter-li">
                                    <span>Bird</span>
                                    <input
                                        type="checkbox"
                                        name="input-for-species"
                                        className="filter-form-input"
                                    />
                                </li>
                                <li className="filter-li">
                                    <span>Rabbit</span>
                                    <input
                                        type="checkbox"
                                        name="input-for-species"
                                        className="filter-form-input"
                                    />
                                </li>
                                <li className="filter-li">
                                    <span>Horse</span>
                                    <input
                                        type="checkbox"
                                        name="input-for-species"
                                        className="filter-form-input"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="filter-label">Filter by size</div>
                        <div className="form-field filter">
                            <ul className="filter-ul filter-size">
                                <li className="filter-li">
                                    <span>Small</span>
                                    <input
                                        type="checkbox"
                                        name="input-for-species"
                                        className="filter-form-input"
                                    />
                                </li>
                                <li className="filter-li">
                                    <span>Medium</span>
                                    <input
                                        type="checkbox"
                                        name="input-for-species"
                                        className="filter-form-input"
                                    />
                                </li>
                                <li className="filter-li">
                                    <span>Big</span>
                                    <input
                                        type="checkbox"
                                        name="input-for-species"
                                        className="filter-form-input"
                                    />
                                </li>
                            </ul>
                        </div>
                        <button className="reset-button">Reset all</button>
                    </form>
                </aside>
    )
}