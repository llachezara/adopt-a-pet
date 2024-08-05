import { useEffect, useState } from 'react';

import { useForm } from '../../../hooks/useForm';
import './AnimalProfileEdit.css'

export default function AnimalProfileEdit({
    hideEditHandler,
    animalProfileInfo
}) {
    const [formStepState, setFormStepState] = useState(1);
    const animalDetails = useForm({
        "name": animalProfileInfo.name,
        "species": animalProfileInfo.species,
        "breed": animalProfileInfo.breed,
        "age": animalProfileInfo.age,
        "imageUrl": animalProfileInfo.imageUrl,
        "size": animalProfileInfo.size,
        "gender": animalProfileInfo.gender,
        "personality": animalProfileInfo.personality,
        "background": animalProfileInfo.background
    }, "skipErrorsSetting");

    const healthAndOwnerInfo = useForm({
        "vaccinated": animalProfileInfo["vaccinated"],
        "spayed": animalProfileInfo["spayed"],
        "med-conditions": animalProfileInfo["med-conditions"],
        "med-conditions-info": animalProfileInfo["med-conditions-info"],
        "owner-name": animalProfileInfo["owner-name"],
        "owner-email": animalProfileInfo["owner-email"],
        "owner-phone": animalProfileInfo["owner-phone"],
        "location": animalProfileInfo["location"]
    }, "skipErrorsSetting");

    useEffect(() => {
        window?.scrollTo(0, 0);
    }, [formStepState]);

    const checkCurrentFormValues = (checkHandler) => {
        return checkHandler();
    }
    const nextHandler = (e) => {
        e.preventDefault();
        let inputErrorsExist = false;
        switch (formStepState) {
            case 1:
                inputErrorsExist = checkCurrentFormValues(animalDetails.onSubmitCheckValues);
                break;
            case 2:
                inputErrorsExist = checkCurrentFormValues(healthAndOwnerInfo.onSubmitCheckValues);
                break;
        }

        if (!inputErrorsExist) {
            setFormStepState(prevState => prevState + 1);
        }
    }

    const previousHandler = (e) => {
        e.preventDefault();
        setFormStepState(prevState => prevState - 1);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Submit");
        hideEditHandler();
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
                {formStepState == 1 && <form action="#" method="POST" className="edit-form" onSubmit={nextHandler}>
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
                                        className={animalDetails.inputErrors["name"].currentError && animalDetails.inputErrors["name"].showError ? "invalid" : ""}
                                        value={animalDetails.values.name}
                                        onChange={animalDetails.onChangeHandler}
                                        onBlur={animalDetails.onBlurHandler}
                                        onFocus={animalDetails.onFocusHandler}
                                    />
                                    {animalDetails.inputErrors["name"].currentError && animalDetails.inputErrors["name"].showError ?
                                        <span className="invalid-input-error">{animalDetails.inputErrors["name"].currentError}</span>
                                        :
                                        <span className="helper-info">example: Daisy</span>
                                    }
                                </div>
                                <div className="field">
                                    <label htmlFor="species" className="required">Species</label>
                                    <select
                                        name="species"
                                        id="species"
                                        className={animalDetails.inputErrors["species"].currentError && animalDetails.inputErrors["species"].showError ? "invalid" : ""}
                                        value={animalDetails.values.species}
                                        onChange={animalDetails.onChangeHandler}
                                        onBlur={animalDetails.onBlurHandler}
                                        onFocus={animalDetails.onFocusHandler}
                                    >
                                        <option value="cat">Cat</option>
                                        <option value="dog">Dog</option>
                                        <option value="bird">Bird</option>
                                        <option value="rabbit">Rabbit</option>
                                        <option value="horse">Horse</option>
                                    </select>
                                    {animalDetails.inputErrors["species"].currentError && animalDetails.inputErrors["species"].showError &&
                                        <span className="invalid-input-error">{animalDetails.inputErrors["species"].currentError}</span>
                                    }
                                </div>
                                <div className="field">
                                    <label htmlFor="breed" className="required">Breed</label>
                                    <input
                                        type="text"
                                        id="breed"
                                        name="breed"
                                        className={animalDetails.inputErrors["breed"].currentError && animalDetails.inputErrors["breed"].showError ? "invalid" : ""}
                                        value={animalDetails.values.breed}
                                        onChange={animalDetails.onChangeHandler}
                                        onBlur={animalDetails.onBlurHandler}
                                        onFocus={animalDetails.onFocusHandler}
                                    />
                                    {animalDetails.inputErrors["breed"].currentError && animalDetails.inputErrors["breed"].showError ?
                                        <span className="invalid-input-error">{animalDetails.inputErrors["breed"].currentError}</span>
                                        :
                                        <span className="helper-info">example: Half german sheperd, half street dog</span>
                                    }
                                </div>
                                <div className="field">
                                    <label htmlFor="age" className="required">Age</label>
                                    <input
                                        type="text"
                                        id="age"
                                        name="age"
                                        className={animalDetails.inputErrors["age"].currentError && animalDetails.inputErrors["age"].showError ? "invalid" : ""}
                                        value={animalDetails.values.age}
                                        onChange={animalDetails.onChangeHandler}
                                        onBlur={animalDetails.onBlurHandler}
                                        onFocus={animalDetails.onFocusHandler}
                                    />
                                    {animalDetails.inputErrors["age"].currentError && animalDetails.inputErrors["age"].showError ?
                                        <span className="invalid-input-error">{animalDetails.inputErrors["age"].currentError}</span>
                                        :
                                        <span className="helper-info">example: Less than 1 month</span>
                                    }
                                </div>
                                <div className="field field-upload-photos">
                                    <label htmlFor="imageUrl"> Pet's image URL</label>
                                    <input
                                        type="text"
                                        id="imageUrl"
                                        name="imageUrl"
                                        className={animalDetails.inputErrors["imageUrl"].currentError && animalDetails.inputErrors["imageUrl"].showError ? "invalid" : ""}
                                        value={animalDetails.values.imageUrl}
                                        onChange={animalDetails.onChangeHandler}
                                        onBlur={animalDetails.onBlurHandler}
                                        onFocus={animalDetails.onFocusHandler}
                                    />
                                    {animalDetails.inputErrors["imageUrl"].currentError && animalDetails.inputErrors["imageUrl"].showError ?
                                        <span className="invalid-input-error">{animalDetails.inputErrors["imageUrl"].currentError}</span>
                                        :
                                        <span className="helper-info">Image URL must start with 'https://' and be with format png|jpg|jpeg|gif|bmp|svg|webp.</span>
                                    }
                                </div>
                            </div>
                            <div className="fields-wrapper-2">
                                <div className="field">
                                    <label htmlFor="size" className="required">Size</label>
                                    <select
                                        name="size"
                                        id="size"
                                        className={animalDetails.inputErrors["size"].currentError && animalDetails.inputErrors["size"].showError ? "invalid" : ""}
                                        value={animalDetails.values.size}
                                        onChange={animalDetails.onChangeHandler}
                                        onBlur={animalDetails.onBlurHandler}
                                        onFocus={animalDetails.onFocusHandler}
                                    >
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                    {animalDetails.inputErrors["size"].currentError && animalDetails.inputErrors["size"].showError &&
                                        <span className="invalid-input-error">{animalDetails.inputErrors["size"].currentError}</span>
                                    }
                                </div>
                                <div className="field">
                                    <label htmlFor="gender" className="required">Gender</label>
                                    <select
                                        name="gender"
                                        id="gender"
                                        className={animalDetails.inputErrors["gender"].currentError && animalDetails.inputErrors["gender"].showError ? "invalid" : ""}
                                        value={animalDetails.values.gender}
                                        onChange={animalDetails.onChangeHandler}
                                        onBlur={animalDetails.onBlurHandler}
                                        onFocus={animalDetails.onFocusHandler}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    {animalDetails.inputErrors["gender"].currentError && animalDetails.inputErrors["gender"].showError &&
                                        <span className="invalid-input-error">{animalDetails.inputErrors["gender"].currentError}</span>
                                    }
                                </div>
                                <div className="field">
                                    <label htmlFor="personality">Personality traits</label>
                                    <input
                                        type="text"
                                        id="personality"
                                        name="personality"
                                        className={animalDetails.inputErrors["personality"].currentError && animalDetails.inputErrors["personality"].showError ? "invalid" : ""}
                                        value={animalDetails.values.personality}
                                        onChange={animalDetails.onChangeHandler}
                                        onBlur={animalDetails.onBlurHandler}
                                        onFocus={animalDetails.onFocusHandler}
                                    />
                                    {animalDetails.inputErrors["personality"].currentError && animalDetails.inputErrors["personality"].showError ?
                                        <span className="invalid-input-error">{animalDetails.inputErrors["personality"].currentError}</span>
                                        :
                                        <span className="helper-info">example: friendly, energetic, calm, etc.</span>
                                    }
                                </div>
                                <div className="field">
                                    <label htmlFor="background">Pet's background / history</label>
                                    <textarea
                                        rows={6}
                                        placeholder="The pet was..."
                                        name="background"
                                        id="background"
                                        className={animalDetails.inputErrors["background"].currentError && animalDetails.inputErrors["background"].showError ? "invalid" : ""}
                                        value={animalDetails.values.background}
                                        onChange={animalDetails.onChangeHandler}
                                        onBlur={animalDetails.onBlurHandler}
                                        onFocus={animalDetails.onFocusHandler}
                                    />
                                    {animalDetails.inputErrors["background"].currentError && animalDetails.inputErrors["background"].showError &&
                                        <span className="invalid-input-error">{animalDetails.inputErrors["background"].currentError}</span>
                                    }
                                </div>
                            </div>
                        </div>
                        <div id="form-actions">
                            <button
                                id="action-save"
                                type="submit"
                                className={`btn ${animalDetails.submitButtonEnabledState ? "" : "form-button-disabled"}`}
                                disabled={!animalDetails.submitButtonEnabledState}
                            >
                                Next
                            </button>
                            <button id="action-cancel" className="btn" type="button" onClick={hideEditHandler}>
                                Cancel
                            </button>
                        </div>
                    </fieldset>

                </form>}
                {formStepState == 2 && <form action="#" method="POST" className="edit-form" onSubmit={onSubmitHandler}>
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
                                                checked={healthAndOwnerInfo.values["vaccinated"] == "Yes"}
                                                onChange={healthAndOwnerInfo.onChangeHandler}
                                            />
                                            <label htmlFor="vacc-yes">Yes</label>
                                            <input
                                                type="radio"
                                                name="vaccinated"
                                                id="vacc-no"
                                                value="No"
                                                checked={healthAndOwnerInfo.values["vaccinated"] == "No"}
                                                onChange={healthAndOwnerInfo.onChangeHandler}
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
                                                checked={healthAndOwnerInfo.values["spayed"] == "Yes"}
                                                onChange={healthAndOwnerInfo.onChangeHandler}
                                            />
                                            <label htmlFor="spayed-yes">Yes</label>
                                            <input
                                                type="radio"
                                                name="spayed"
                                                id="spayed-no"
                                                value="No"
                                                checked={healthAndOwnerInfo.values["spayed"] == "No"}
                                                onChange={healthAndOwnerInfo.onChangeHandler}
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
                                                checked={healthAndOwnerInfo.values["med-conditions"] == "Yes"}
                                                onChange={healthAndOwnerInfo.onChangeHandler}
                                            />
                                            <label htmlFor="med-conditions-yes">Yes</label>
                                            <input
                                                type="radio"
                                                name="med-conditions"
                                                id="med-conditions-no"
                                                value="No"
                                                checked={healthAndOwnerInfo.values["med-conditions"] == "No"}
                                                onChange={healthAndOwnerInfo.onChangeHandler}
                                            />
                                            <label htmlFor="med-conditions-no">No</label>
                                        </div>
                                        <textarea
                                            rows={4}
                                            name="med-conditions-info"
                                            id="med-conditions-info"
                                            placeholder="Write the medical condition..."
                                            className={`${healthAndOwnerInfo.values["med-conditions"] == "Yes" ? "" : "textarea-disabled"} ${healthAndOwnerInfo.inputErrors["med-conditions-info"].currentError && healthAndOwnerInfo.inputErrors["med-conditions-info"].showError ? "invalid" : ""}`}
                                            disabled={healthAndOwnerInfo.values["med-conditions"] == "Yes" ? false : true}
                                            value={healthAndOwnerInfo.values["med-conditions-info"]}
                                            onChange={healthAndOwnerInfo.onChangeHandler}
                                            onBlur={healthAndOwnerInfo.onBlurHandler}
                                            onFocus={healthAndOwnerInfo.onFocusHandler}
                                        />
                                        {healthAndOwnerInfo.inputErrors["med-conditions-info"].currentError && healthAndOwnerInfo.inputErrors["med-conditions-info"].showError &&
                                            <span className="invalid-input-error">{healthAndOwnerInfo.inputErrors["med-conditions-info"].currentError}</span>
                                        }
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
                                            className={healthAndOwnerInfo.inputErrors["owner-name"].currentError && healthAndOwnerInfo.inputErrors["owner-name"].showError ? "invalid" : ""}
                                            value={healthAndOwnerInfo.values["owner-name"]}
                                            onChange={healthAndOwnerInfo.onChangeHandler}
                                            onBlur={healthAndOwnerInfo.onBlurHandler}
                                            onFocus={healthAndOwnerInfo.onFocusHandler}
                                        />
                                        {healthAndOwnerInfo.inputErrors["owner-name"].currentError && healthAndOwnerInfo.inputErrors["owner-name"].showError ?
                                            <span className="invalid-input-error">{healthAndOwnerInfo.inputErrors["owner-name"].currentError}</span>
                                            :
                                            <span className="helper-info">example: Yana Petkova</span>
                                        }
                                    </div>
                                    <div className="field">
                                        <label htmlFor="owner-phone" className="required">Phone Number</label>
                                        <input
                                            type="text"
                                            id="owner-phone"
                                            name="owner-phone"
                                            className={healthAndOwnerInfo.inputErrors["owner-phone"].currentError && healthAndOwnerInfo.inputErrors["owner-phone"].showError ? "invalid" : ""}
                                            value={healthAndOwnerInfo.values["owner-phone"]}
                                            onChange={healthAndOwnerInfo.onChangeHandler}
                                            onBlur={healthAndOwnerInfo.onBlurHandler}
                                            onFocus={healthAndOwnerInfo.onFocusHandler}
                                        />
                                        {healthAndOwnerInfo.inputErrors["owner-phone"].currentError && healthAndOwnerInfo.inputErrors["owner-phone"].showError ?
                                            <span className="invalid-input-error">{healthAndOwnerInfo.inputErrors["owner-phone"].currentError}</span>
                                            :
                                            <span className="helper-info">Please enter a valid Bulgarian phone number starting with '08', followed by 8 digits (e.g., 0871234567).</span>
                                        }
                                    </div>
                                    {/* enter a valid Bulgarian phone number starting with '08', followed by 8 digits (e.g., 0871234567). */}
                                    <div className="field">
                                        <label htmlFor="owner-email" className="required">Email Address</label>
                                        <input
                                            type="text"
                                            id="owner-email"
                                            name="owner-email"
                                            className={healthAndOwnerInfo.inputErrors["owner-email"].currentError && healthAndOwnerInfo.inputErrors["owner-email"].showError ? "invalid" : ""}
                                            value={healthAndOwnerInfo.values["owner-email"]}
                                            onChange={healthAndOwnerInfo.onChangeHandler}
                                            onBlur={healthAndOwnerInfo.onBlurHandler}
                                            onFocus={healthAndOwnerInfo.onFocusHandler}
                                        />
                                        {healthAndOwnerInfo.inputErrors["owner-email"].currentError && healthAndOwnerInfo.inputErrors["owner-email"].showError ?
                                            <span className="invalid-input-error">{healthAndOwnerInfo.inputErrors["owner-email"].currentError}</span>
                                            :
                                            <span className="helper-info">example: john.doe@gmail.com</span>
                                        }
                                    </div>
                                    <div className="field">
                                        <label htmlFor="location">Location</label>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            className={healthAndOwnerInfo.inputErrors["location"].currentError && healthAndOwnerInfo.inputErrors["location"].showError ? "invalid" : ""}
                                            value={healthAndOwnerInfo.values["location"]}
                                            onChange={healthAndOwnerInfo.onChangeHandler}
                                            onBlur={healthAndOwnerInfo.onBlurHandler}
                                            onFocus={healthAndOwnerInfo.onFocusHandler}
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
                            <button
                                id="action-save"
                                type="submit"
                                className={`btn ${healthAndOwnerInfo.submitButtonEnabledState ? "" : "form-button-disabled"}`}
                                disabled={!healthAndOwnerInfo.submitButtonEnabledState}
                            >Save
                            </button>
                        </div>
                    </fieldset>
                </form>}
            </div>
        </div>)
}