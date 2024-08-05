import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

import { useGetOneAnimalProfile } from '../../../hooks/animal-profile-hooks/useAnimalProfileQueries';
import './AnimalProfileDetails.css';
import { showErrorMessage } from '../../../utils/messagesUtil';

import AnimalProfileDelete from '../Animal-Profile-Delete/AnimalProfileDelete';

export default function AnimalProfileDetails() {
    const { animalId } = useParams();
    const { animalProfileState, getAnimalDetails, adopt } = useGetOneAnimalProfile(animalId);
    const { animalProfile, loading, error, isUserPresent, isOwner, isUserAdopter } = animalProfileState;
    const [ showDeleteModalState, setShowDeleteModalState] = useState(false);

    if (error) {
        //TODO: Navigate to 404 page
        return console.log(error);
    }

    if (!animalProfile) {
        return null;
    }
    const userCanSeeOwnerDetails = (animalProfile.isAdopted && isUserAdopter) || isOwner;

    const onClickAdopt = async (petId) => {
        const adoptError = await adopt(petId);
        if (adoptError) {
            showErrorMessage("Adopting failed.");
        }
        await getAnimalDetails();
    }

    const showDeleteModalHandler = () => {
        setShowDeleteModalState(true);
    }

    const hideDeleteModalHandler = () => {
        setShowDeleteModalState(false)
    }
    return (
        <div className="details-main-container">
            <main className="details-main">
                <div className="details-content-container">
                    <h1 className="details-heading">Pet Details</h1>
                    <div className="animal-details">
                        <div className="animal-info">
                            <img
                                src={`${animalProfile["imageUrl"]}` || "/default-image.jpg"}
                                alt="Animal Photo"
                                className="animal-photo"
                            />
                            {animalProfile.isAdopted && <span className="animal-photo-adopted"></span>}
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
                                    Vaccinated: <span id="animal-vaccinated">{animalProfile["vaccinated"]}</span>
                                </p>
                                <p>
                                    Spayed/Neutered: <span id="animal-spayed-neutered">{animalProfile["spayed"]}</span>
                                </p>
                                <p>
                                    Medical Conditions:{" "}
                                    <span id="animal-medical-conditions">{animalProfile["med-conditions"] == "Yes" ? animalProfile["med-conditions-info"] : "None"}</span>
                                </p>
                                {animalProfile["personality"] &&
                                    <p>
                                        Personality Traits:{" "}
                                        <span id="animal-personality">{animalProfile["personality"]}</span>
                                    </p>
                                }
                            </div>
                        </div>

                        {animalProfile["background"] &&
                            <div className="animal-background">
                                <h2>Pet background</h2>
                                <p className="pet-background">{animalProfile["background"]}</p>
                            </div>
                        }
                    </div>
                    {userCanSeeOwnerDetails &&
                        <div className="owner-details">
                            <h2 className="owner-heading">Owner Details</h2>
                            <div className="owner-info">
                                <p>
                                    Name: <span id="owner-name">{animalProfile["owner-name"]}</span>
                                </p>
                                <p>
                                    Phone: <span id="owner-phone">{animalProfile["owner-phone"]}</span>
                                </p>
                                <p>
                                    Email: <span id="owner-email">{animalProfile["owner-email"]}</span>
                                </p>
                                {animalProfile["location"] &&
                                    <p>
                                        Location: <span id="owner-location">{animalProfile["location"]}</span>
                                    </p>
                                }
                            </div>
                        </div>
                    }
                    <div className="details-action-buttons">

                        {!animalProfile.isAdopted && isUserPresent && !isOwner &&
                            <button id="adopt-button" onClick={() => onClickAdopt(animalProfile.id)}>Adopt</button>
                        }

                        {isOwner &&
                            <>
                                <button id="edit-button">Edit</button>
                                <button id="delete-button" onClick={showDeleteModalHandler}>Delete</button>
                            </>
                        }
                    </div>
                    {isUserAdopter &&
                        <div className="pet-adopted">
                            <h4>You've adopted this pet!</h4>
                            <p>Please contact the previous owner for more information about your new furry friend.</p>
                        </div>
                    }
                </div>

                {showDeleteModalState && <AnimalProfileDelete hideDeleteModalHandler={hideDeleteModalHandler} />}
            </main>
        </div>

    )
}