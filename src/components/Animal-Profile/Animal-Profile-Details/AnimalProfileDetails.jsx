import './AnimalProfileDetails.css';

export default function AnimalProfileDetails() {
    return (
        <div className="details-main-container">
            <main className="details-main">
                <div className="details-content-container">
                    <h1 className="details-heading">Pet Details</h1>
                    <div className="animal-details">
                        <div className="animal-info">
                            <img
                                src="/roxi.jpg"
                                alt="Animal Photo"
                                className="animal-photo"
                            />
                            <div className="info">
                                <h2 className="animal-heading">
                                    Name: <span id="animal-name">Buddy</span>
                                </h2>
                                <p>
                                    Species: <span id="animal-species">Dog</span>
                                </p>
                                <p>
                                    Breed: <span id="animal-breed">Golden Retriever</span>
                                </p>
                                <p>
                                    Age: <span id="animal-age">2 years</span>
                                </p>
                                <p>
                                    Gender: <span id="animal-gender">Male</span>
                                </p>
                                <p>
                                    Size: <span id="animal-size">Large</span>
                                </p>
                                <p>
                                    Spayed/Neutered: <span id="animal-spayed-neutered">Yes</span>
                                </p>
                                <p>
                                    Medical Conditions:{" "}
                                    <span id="animal-medical-conditions">None</span>
                                </p>
                                <p>
                                    Personality Traits:{" "}
                                    <span id="animal-personality">Friendly, Energetic</span>
                                </p>
                            </div>
                        </div>
                        <div className="animal-background">
                            <h2>Pet background</h2>
                            <p className="pet-background">
                                Buddy has a really tough past. He was on the streets and because he
                                is a golden, he was taken advantage from. He was a in the
                                neighbourhood. Often he was getting lost, but returned after that.
                            </p>
                        </div>
                    </div>
                    <div className="owner-details">
                        <h2 className="owner-heading">Owner Details</h2>
                        <div className="owner-info">
                            <p>
                                Name: <span id="owner-name">John Doe</span>
                            </p>
                            <p>
                                Phone: <span id="owner-phone">08735625112</span>
                            </p>
                            <p>
                                Email: <span id="owner-email">johndoe@example.com</span>
                            </p>
                            <p>
                                Location: <span id="owner-location">City, State</span>
                            </p>
                        </div>
                    </div>
                    <div className="details-action-buttons">
                        <button id="adopt-button">Adopt</button>

                        <button id="edit-button">Edit</button>
                        <button id="delete-button">Delete</button>

                    </div>
                </div>
            </main>
        </div>

    )
}