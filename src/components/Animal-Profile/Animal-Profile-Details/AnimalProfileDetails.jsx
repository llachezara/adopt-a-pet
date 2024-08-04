import { useNavigate, useParams } from 'react-router-dom';

import { useGetOneAnimalProfile } from '../../../hooks/animal-profile-hooks/useAnimalProfileQueries';
import './AnimalProfileDetails.css';

export default function AnimalProfileDetails() {
    const { animalId } = useParams();
    const { animalProfileState } = useGetOneAnimalProfile(animalId);
    const { animalProfile, loading, error} = animalProfileState;
    console.log(animalProfile);
    
    if (error) {
        //TODO: Navigate to 404 page
        return console.log(error);
    }

    if (!animalProfile) {
        return null;
    }

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
                                    Name: <span id="animal-name">{animalProfile["name"] || "No name"}</span>
                                </h2>
                                <p>
                                    Species: <span id="animal-species">{animalProfile["species"]}</span>
                                </p>
                                <p>
                                    Breed: <span id="animal-breed">{animalProfile["breed"]}</span>
                                </p>
                                <p>
                                    Age: <span id="animal-age">{animalProfile["age"]}</span>
                                </p>
                                <p>
                                    Gender: <span id="animal-gender">{animalProfile["gender"]}</span>
                                </p>
                                <p>
                                    Size: <span id="animal-size">{animalProfile["size"]}</span>
                                </p>
                                <p>
                                    Spayed/Neutered: <span id="animal-spayed-neutered">{animalProfile["spayed"]}</span>
                                </p>
                                <p>
                                    Medical Conditions:{" "}
                                    <span id="animal-medical-conditions">{animalProfile["med-conditions"] == "Yes" ? animalProfile["med-conditions-info"] : "None"}</span>
                                </p>
                                <p>
                                    Personality Traits:{" "}
                                    <span id="animal-personality">{animalProfile["personality"]}</span>
                                </p>
                            </div>
                        </div>
                        <div className="animal-background">
                            <h2>Pet background</h2>
                            <p className="pet-background">{animalProfile["background"]}</p>
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