import { useEffect, useState } from 'react';

import './AnimalProfileEdit.css'
export default function AnimalProfileEdit({ hideEditHandler }) {
    const [formStepState, setFormStepState] = useState(1);

    useEffect(() => {
        window?.scrollTo(0, 0);
    }, [formStepState]);

    const nextHandler = (e) => {
        e.preventDefault();
        let inputErrorsExist = false;

        if (!inputErrorsExist) {
            setFormStepState(prevState => prevState + 1);
        }
    }

    const previousHandler = (e) => {
        e.preventDefault();
        setFormStepState(prevState => prevState - 1);
    }

    return (
        <div className="overlay">
            <div className="backdrop" onClick={hideEditHandler}></div>
            <div className="edit-form-container">
                <section className="edit-form-header">
                    <h3 className="edit-form-heading">
                        Edit Adoption Profile
                    </h3>
                    <button className="btn close" onClick={hideEditHandler}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                            className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor"
                                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                            </path>
                        </svg>
                    </button>
                </section>
                {formStepState == 1 && <form action="#" method="POST" className="edit-form">
                    <fieldset>
                        <h4 className="fieldset-heading">Animal Details</h4>
                        <div className="fields-wrapper">
                            <div className="fields-wrapper-1">
                                <div className="field">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                    // className={animalDetails.inputErrors["name"].currentError && animalDetails.inputErrors["name"].showError ? "invalid" : ""}
                                    // value={animalDetails.values.name}
                                    // onChange={animalDetails.onChangeHandler}
                                    // onBlur={animalDetails.onBlurHandler}
                                    // onFocus={animalDetails.onFocusHandler}
                                    />
                                    {/* {animalDetails.inputErrors["name"].currentError && animalDetails.inputErrors["name"].showError ?
                                                <span className="invalid-input-error">{animalDetails.inputErrors["name"].currentError}</span>
                                                :
                                                <span className="helper-info">example: Daisy</span>
                                            } */}
                                </div>
                                <div className="field">
                                    <label htmlFor="species" className="required">Species</label>
                                    <select
                                        name="species"
                                        id="species"
                                    // className={animalDetails.inputErrors["species"].currentError && animalDetails.inputErrors["species"].showError ? "invalid" : ""}
                                    // value={animalDetails.values.species}
                                    // onChange={animalDetails.onChangeHandler}
                                    // onBlur={animalDetails.onBlurHandler}
                                    // onFocus={animalDetails.onFocusHandler}
                                    >
                                        <option value="cat">Cat</option>
                                        <option value="dog">Dog</option>
                                        <option value="bird">Bird</option>
                                        <option value="rabbit">Rabbit</option>
                                        <option value="horse">Horse</option>
                                    </select>
                                    {/* {animalDetails.inputErrors["species"].currentError && animalDetails.inputErrors["species"].showError &&
                                                <span className="invalid-input-error">{animalDetails.inputErrors["species"].currentError}</span>
                                            } */}
                                </div>
                                <div className="field">
                                    <label htmlFor="breed" className="required">Breed</label>
                                    <input
                                        type="text"
                                        id="breed"
                                        name="breed"
                                    // className={animalDetails.inputErrors["breed"].currentError && animalDetails.inputErrors["breed"].showError ? "invalid" : ""}
                                    // value={animalDetails.values.breed}
                                    // onChange={animalDetails.onChangeHandler}
                                    // onBlur={animalDetails.onBlurHandler}
                                    // onFocus={animalDetails.onFocusHandler}
                                    />
                                    {/* {animalDetails.inputErrors["breed"].currentError && animalDetails.inputErrors["breed"].showError ?
                                                <span className="invalid-input-error">{animalDetails.inputErrors["breed"].currentError}</span>
                                                :
                                                <span className="helper-info">example: Half german sheperd, half street dog</span>
                                            } */}
                                </div>
                                <div className="field">
                                    <label htmlFor="age" className="required">Age</label>
                                    <input
                                        type="text"
                                        id="age"
                                        name="age"
                                    // className={animalDetails.inputErrors["age"].currentError && animalDetails.inputErrors["age"].showError ? "invalid" : ""}
                                    // value={animalDetails.values.age}
                                    // onChange={animalDetails.onChangeHandler}
                                    // onBlur={animalDetails.onBlurHandler}
                                    // onFocus={animalDetails.onFocusHandler}
                                    />
                                    {/* {animalDetails.inputErrors["age"].currentError && animalDetails.inputErrors["age"].showError ?
                                                <span className="invalid-input-error">{animalDetails.inputErrors["age"].currentError}</span>
                                                :
                                                <span className="helper-info">example: Less than 1 month</span>
                                            } */}
                                </div>
                                <div className="field field-upload-photos">
                                    <label htmlFor="imageUrl"> Pet's image URL</label>
                                    <input
                                        type="text"
                                        id="imageUrl"
                                        name="imageUrl"
                                    // className={animalDetails.inputErrors["imageUrl"].currentError && animalDetails.inputErrors["imageUrl"].showError ? "invalid" : ""}
                                    // value={animalDetails.values.imageUrl}
                                    // onChange={animalDetails.onChangeHandler}
                                    // onBlur={animalDetails.onBlurHandler}
                                    // onFocus={animalDetails.onFocusHandler}
                                    />
                                    {/* {animalDetails.inputErrors["imageUrl"].currentError && animalDetails.inputErrors["imageUrl"].showError ?
                                                <span className="invalid-input-error">{animalDetails.inputErrors["imageUrl"].currentError}</span>
                                                :
                                                <span className="helper-info">Image URL must start with 'https://' and be with format png|jpg|jpeg|gif|bmp|svg|webp.</span>
                                            } */}
                                </div>
                            </div>
                            <div className="fields-wrapper-2">
                                <div className="field">
                                    <label htmlFor="size" className="required">Size</label>
                                    <select
                                        name="size"
                                        id="size"
                                    // className={animalDetails.inputErrors["size"].currentError && animalDetails.inputErrors["size"].showError ? "invalid" : ""}
                                    // value={animalDetails.values.size}
                                    // onChange={animalDetails.onChangeHandler}
                                    // onBlur={animalDetails.onBlurHandler}
                                    // onFocus={animalDetails.onFocusHandler}
                                    >
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                    {/* {animalDetails.inputErrors["size"].currentError && animalDetails.inputErrors["size"].showError &&
                                                <span className="invalid-input-error">{animalDetails.inputErrors["size"].currentError}</span>
                                            } */}
                                </div>
                                <div className="field">
                                    <label htmlFor="gender" className="required">Gender</label>
                                    <select
                                        name="gender"
                                        id="gender"
                                    // className={animalDetails.inputErrors["gender"].currentError && animalDetails.inputErrors["gender"].showError ? "invalid" : ""}
                                    // value={animalDetails.values.gender}
                                    // onChange={animalDetails.onChangeHandler}
                                    // onBlur={animalDetails.onBlurHandler}
                                    // onFocus={animalDetails.onFocusHandler}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    {/* {animalDetails.inputErrors["gender"].currentError && animalDetails.inputErrors["gender"].showError &&
                                                <span className="invalid-input-error">{animalDetails.inputErrors["gender"].currentError}</span>
                                            } */}
                                </div>
                                <div className="field">
                                    <label htmlFor="personality">Personality traits</label>
                                    <input
                                        type="text"
                                        id="personality"
                                        name="personality"
                                    // className={animalDetails.inputErrors["personality"].currentError && animalDetails.inputErrors["personality"].showError ? "invalid" : ""}
                                    // value={animalDetails.values.personality}
                                    // onChange={animalDetails.onChangeHandler}
                                    // onBlur={animalDetails.onBlurHandler}
                                    // onFocus={animalDetails.onFocusHandler}
                                    />
                                    {/* {animalDetails.inputErrors["personality"].currentError && animalDetails.inputErrors["personality"].showError ?
                                                <span className="invalid-input-error">{animalDetails.inputErrors["personality"].currentError}</span>
                                                :
                                                <span className="helper-info">example: friendly, energetic, calm, etc.</span>
                                            } */}
                                </div>
                                <div className="field">
                                    <label htmlFor="background">Pet's background / history</label>
                                    <textarea
                                        rows={6}
                                        placeholder="The pet was..."
                                        name="background"
                                        id="background"
                                    // className={animalDetails.inputErrors["background"].currentError && animalDetails.inputErrors["background"].showError ? "invalid" : ""}
                                    // value={animalDetails.values.background}
                                    // onChange={animalDetails.onChangeHandler}
                                    // onBlur={animalDetails.onBlurHandler}
                                    // onFocus={animalDetails.onFocusHandler}
                                    />
                                    {/* {animalDetails.inputErrors["background"].currentError && animalDetails.inputErrors["background"].showError &&
                                                <span className="invalid-input-error">{animalDetails.inputErrors["background"].currentError}</span>
                                            } */}
                                </div>
                            </div>
                        </div>
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="button" onClick={nextHandler}>Next</button>
                            <button id="action-cancel" className="btn" type="button" onClick={hideEditHandler}>
                                Cancel
                            </button>
                        </div>
                    </fieldset>

                </form>}
                {formStepState == 2 && <form action="#" method="POST" className="edit-form">
                    <fieldset>
                        <div className="fields-wrapper">
                            <div className="fields-wrapper-1">
                                <div className="health-info">
                                    <h5 className="fieldset-heading health-heading">
                                        Health Information
                                    </h5>
                                    <div className="field">
                                        <label htmlFor="vaccinated" className="required">Vaccinated</label>
                                        <div className="radio-container">
                                            <input
                                                type="radio"
                                                name="vaccinated"
                                                id="vacc-yes"
                                                value="Yes"
                                            // checked={healthInformation.values["vaccinated"] == "Yes"}
                                            // onChange={healthInformation.onChangeHandler}
                                            />
                                            <label htmlFor="vacc-yes">Yes</label>
                                            <input
                                                type="radio"
                                                name="vaccinated"
                                                id="vacc-no"
                                                value="No"
                                            // checked={healthInformation.values["vaccinated"] == "No"}
                                            // onChange={healthInformation.onChangeHandler}
                                            />
                                            <label htmlFor="vacc-no">No</label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="spayed" className="required">Spayed / Neutered</label>
                                        <div className="radio-container">
                                            <input
                                                type="radio"
                                                name="spayed"
                                                id="spayed-yes"
                                                value="Yes"
                                            // checked={healthInformation.values["spayed"] == "Yes"}
                                            // onChange={healthInformation.onChangeHandler}
                                            />
                                            <label htmlFor="spayed-yes">Yes</label>
                                            <input
                                                type="radio"
                                                name="spayed"
                                                id="spayed-no"
                                                value="No"
                                            // checked={healthInformation.values["spayed"] == "No"}
                                            // onChange={healthInformation.onChangeHandler}
                                            />
                                            <label htmlFor="spayed-no">No</label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="med-conditions" className="required">Any known medical conditions</label>
                                        <div className="radio-container">
                                            <input
                                                type="radio"
                                                name="med-conditions"
                                                id="med-conditions-yes"
                                                value="Yes"
                                            // checked={healthInformation.values["med-conditions"] == "Yes"}
                                            // onChange={healthInformation.onChangeHandler}
                                            />
                                            <label htmlFor="med-conditions-yes">Yes</label>
                                            <input
                                                type="radio"
                                                name="med-conditions"
                                                id="med-conditions-no"
                                                value="No"
                                            // checked={healthInformation.values["med-conditions"] == "No"}
                                            // onChange={healthInformation.onChangeHandler}
                                            />
                                            <label htmlFor="med-conditions-no">No</label>
                                        </div>
                                        <textarea
                                            rows={4}
                                            name="med-conditions-info"
                                            id="med-conditions-info"
                                            placeholder="Write the medical condition..."
                                        // className={`${healthInformation.values["med-conditions"] == "Yes" ? "" : "textarea-disabled"} ${healthInformation.inputErrors["med-conditions-info"].currentError && healthInformation.inputErrors["med-conditions-info"].showError ? "invalid" : ""}`}
                                        // disabled={healthInformation.values["med-conditions"] == "Yes" ? false : true}
                                        // value={healthInformation.values["med-conditions-info"]}
                                        // onChange={healthInformation.onChangeHandler}
                                        // onBlur={healthInformation.onBlurHandler}
                                        // onFocus={healthInformation.onFocusHandler}
                                        />
                                        {/* {healthInformation.inputErrors["med-conditions-info"].currentError && healthInformation.inputErrors["med-conditions-info"].showError &&
                                <span className="invalid-input-error">{healthInformation.inputErrors["med-conditions-info"].currentError}</span>
                            } */}
                                    </div>
                                </div>
                            </div>
                            <div className="fields-wrapper-2">
                                <div className="owner-details">
                                    <h4 className="fieldset-heading">Owner Details</h4>
                                    <div className="field">
                                        <label htmlFor="owner-name" className="required">Name</label>
                                        <input
                                            type="text"
                                            id="owner-name"
                                            name="owner-name"
                                        // className={ownerDetails.inputErrors["owner-name"].currentError && ownerDetails.inputErrors["owner-name"].showError ? "invalid" : ""}
                                        // value={ownerDetails.values["owner-name"]}
                                        // onChange={ownerDetails.onChangeHandler}
                                        // onBlur={ownerDetails.onBlurHandler}
                                        // onFocus={ownerDetails.onFocusHandler}
                                        />
                                        {/* {ownerDetails.inputErrors["owner-name"].currentError && ownerDetails.inputErrors["owner-name"].showError ?
                                    <span className="invalid-input-error">{ownerDetails.inputErrors["owner-name"].currentError}</span>
                                    :
                                    <span className="helper-info">example: Yana Petkova</span>
                                } */}
                                    </div>
                                    <div className="field">
                                        <label htmlFor="owner-phone" className="required">Phone Number</label>
                                        <input
                                            type="text"
                                            id="owner-phone"
                                            name="owner-phone"
                                        // className={ownerDetails.inputErrors["owner-phone"].currentError && ownerDetails.inputErrors["owner-phone"].showError ? "invalid" : ""}
                                        // value={ownerDetails.values["owner-phone"]}
                                        // onChange={ownerDetails.onChangeHandler}
                                        // onBlur={ownerDetails.onBlurHandler}
                                        // onFocus={ownerDetails.onFocusHandler}
                                        />
                                        {/* {ownerDetails.inputErrors["owner-phone"].currentError && ownerDetails.inputErrors["owner-phone"].showError ?
                                    <span className="invalid-input-error">{ownerDetails.inputErrors["owner-phone"].currentError}</span>
                                    :
                                    <span className="helper-info">Please enter a valid Bulgarian phone number starting with '08', followed by 8 digits (e.g., 0871234567).</span>
                                } */}
                                    </div>
                                    {/* enter a valid Bulgarian phone number starting with '08', followed by 8 digits (e.g., 0871234567). */}
                                    <div className="field">
                                        <label htmlFor="owner-email" className="required">Email Address</label>
                                        <input
                                            type="text"
                                            id="owner-email"
                                            name="owner-email"
                                        // className={ownerDetails.inputErrors["owner-email"].currentError && ownerDetails.inputErrors["owner-email"].showError ? "invalid" : ""}
                                        // value={ownerDetails.values["owner-email"]}
                                        // onChange={ownerDetails.onChangeHandler}
                                        // onBlur={ownerDetails.onBlurHandler}
                                        // onFocus={ownerDetails.onFocusHandler}
                                        />
                                        {/* {ownerDetails.inputErrors["owner-email"].currentError && ownerDetails.inputErrors["owner-email"].showError ?
                                    <span className="invalid-input-error">{ownerDetails.inputErrors["owner-email"].currentError}</span>
                                    :
                                    <span className="helper-info">example: john.doe@gmail.com</span>
                                } */}
                                    </div>
                                    <div className="field">
                                        <label htmlFor="location">Location</label>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                        // className={ownerDetails.inputErrors["location"].currentError && ownerDetails.inputErrors["location"].showError ? "invalid" : ""}
                                        // value={ownerDetails.values["location"]}
                                        // onChange={ownerDetails.onChangeHandler}
                                        // onBlur={ownerDetails.onBlurHandler}
                                        // onFocus={ownerDetails.onFocusHandler}
                                        />
                                        {/* TODO: Integrate google maps */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="form-actions">
                            <button id="action-previous" className="btn" type="button" onClick={previousHandler}>
                                Previous
                            </button>
                            <button id="action-save" className="btn" type="submit">Save</button>
                        </div>
                    </fieldset>
                </form>}
            </div>
        </div>)
}