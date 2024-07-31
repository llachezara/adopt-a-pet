export default function AnimalProfileCreate() {

    return (
        <div className="create-main-container">
            <main className="create-main">
                <div className="create-form-container">
                    <h3 className="form-heading create-form-heading">
                        Create Adoption Profile
                    </h3>
                    <div className="progressbar-container">
                        <ul className="progressbar">
                            <li className="active" data-number={1}>
                                Animal Details
                            </li>
                            <li data-number={2}>Health Information</li>
                            <li data-number={3}>Owner Details</li>
                        </ul>
                    </div>
                    <form action="#" className="create-form" >

                        <fieldset className="type-1">
                            <h4 className="fieldset-heading">Animal Details</h4>
                            <div className="fields-wrapper">
                                <div className="fields-wrapper-1">
                                    <div className="field">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" name="name" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="species" className="required">Species</label>
                                        <select name="species" id="species">
                                            <option value="cat">Cat</option>
                                            <option value="dog">Dog</option>
                                            <option value="rabbit">Bird</option>
                                            <option value="rabbit">Rabbit</option>
                                            <option value="horse">Horse</option>
                                        </select>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="breed" className="required">Breed</label>
                                        <input type="text" id="breed" name="breed" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="age" className="required">Age</label>
                                        <input type="text" id="age" name="age" />
                                    </div>
                                    <div className="field field-upload-photos required">
                                        <label htmlFor="imageUrl">Pet's image URL</label>
                                        <input type="text" id="imageUrl" />
                                    </div>
                                </div>
                                <div className="fields-wrapper-2">
                                    <div className="field">
                                        <label htmlFor="size" className="required">Size</label>
                                        <select name="size" id="size">
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                    </div>
                                    <div className="field required">
                                        <label htmlFor="gender">Gender</label>
                                        <select name="gender" id="gender">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="personality">Personality traits</label>
                                        <input
                                            type="text"
                                            id="personality"
                                            name="personality"
                                            placeholder="Friendly, Energetic, Calm, etc."
                                        />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="background">Pet's background / history</label>
                                        <textarea
                                            rows={6}
                                            placeholder="The pet was..."
                                            name="background"
                                            id="background"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="form-button next-button">
                                NEXT
                            </button>
                        </fieldset>
                    </form>
                    <form action="#" className="create-form">
                        <fieldset className="type-2">
                            <div className="health-info">
                                <h5 className="fieldset-heading health-heading">
                                    Health Information:
                                </h5>
                                <div className="field">
                                    <label htmlFor="vaccinated" className="required">Vaccinated</label>
                                    <div className="radio-container">
                                        <input
                                            type="radio"
                                            name="vaccinated"
                                            id="vacc-yes"
                                            defaultValue="Yes"
                                        />
                                        <label htmlFor="vacc-yes">Yes</label>
                                        <input
                                            type="radio"
                                            name="vaccinated"
                                            id="vacc-no"
                                            defaultValue="No"
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
                                            defaultValue="Yes"
                                        />
                                        <label htmlFor="spayed-yes">Yes</label>
                                        <input
                                            type="radio"
                                            name="spayed"
                                            id="spayed-no"
                                            defaultValue="No"
                                        />
                                        <label htmlFor="spayed-no">No</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="med-conditions" className="required">Any known Medical conditions</label>
                                    <div className="radio-container">
                                        <input
                                            type="radio"
                                            name="med-conditions"
                                            id="med-conditions-yes"
                                            defaultValue="Yes"
                                        />
                                        <label htmlFor="med-conditions-yes">Yes</label>
                                        <input
                                            type="radio"
                                            name="med-conditions"
                                            id="med-conditions-no"
                                            defaultValue="No"
                                        />
                                        <label htmlFor="med-conditions-no">No</label>
                                    </div>
                                    <textarea
                                        rows={4}
                                        name="med-conditions-info"
                                        id="med-conditions-info"
                                        placeholder="Write the medical condition..."
                                        className="textarea-disabled"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="action-buttons">
                                <button type="button" className="form-button previous-button">
                                    PREVIOUS
                                </button>
                                <button type="submit" className="form-button next-button">
                                    NEXT
                                </button>
                            </div>
                        </fieldset>
                    </form>
                    <form action="#" className="create-form">
                        <fieldset className="type-1">
                            <h4 className="fieldset-heading">Owner Details</h4>
                            <div className="fields-wrapper">
                                <div className="fields-wrapper-1">
                                    <div className="field">
                                        <label htmlFor="owner-name" className="required">Name</label>
                                        <input type="text" id="owner-name" name="owner-name" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="owner-phone" className="required">Phone Number</label>
                                        <input type="text" id="owner-phone" name="owner-phone" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="owner-email" className="required">Email Address</label>
                                        <input type="text" id="owner-email" name="owner-email" />
                                    </div>
                                </div>
                                <div className="fields-wrapper-2">
                                    <div className="field">
                                        <label htmlFor="location">Location</label>
                                        <input type="text" id="location" name="location" />
                                        {/* TODO: Integrate google maps */}
                                    </div>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <button type="button" className="form-button previous-button">
                                    PREVIOUS
                                </button>
                                <button type="submit" className="form-button submit-button">
                                    SUBMIT
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </main >
        </div >

    )
}