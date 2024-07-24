import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faMarker, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <>
            <section className="home-section-banner">
                <div className="inner">
                    <div className="content">
                        <h1 className="heading">Find Your Furry Best Friend</h1>
                        <h3 className="banner-subheading">
                            Discover Loyal Companions Awaiting Adoption
                        </h3>
                    </div>
                </div>
            </section>
            <section className="home-section-adopt">
                <h2 className="section-adopt-heading">
                    Have a Pet in Need of a Loving Home?
                </h2>
                <span className="adoption-subheading">Create an adoption profile</span>
                <div className="tips-container">
                    <div className="tip">
                    <FontAwesomeIcon icon={faUsers} style={{fontSize:"2rem"}}/>
                        <p>
                            Connect with compassionate individuals looking for a furry companion.
                        </p>
                    </div>
                    <div className="tip">
                    <FontAwesomeIcon icon={faMarker} style={{fontSize:"2rem"}}/>
                        <p>
                            Share their story, personality, and photos to help them make a
                            heartwarming first impression.
                        </p>
                    </div>
                    <div className="tip">
                    <FontAwesomeIcon icon={faHandHoldingHeart} style={{fontSize:"2rem"}}/>
                        <p>
                            By listing your pet, you’re giving them the chance to find a forever
                            home filled with love and care.
                        </p>
                    </div>
                </div>
                <div className="steps">
                    <h4 className="steps-heading">
                        Start the journey to find your pet the perfect family today!
                    </h4>
                    <div className="progressbar-container">
                        <ul className="progressbar">
                            <li>Register</li>
                            <li>Create</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="home-section-previous-adoptions">
                <h2 className="section-adopt-heading previous-adoptions-heading">
                    Some of our furry friends have already been adopted
                </h2>
                <span className="adoption-subheading">...and now are adored:</span>
                <div className="adopted-pets-container">
                    <div className="adopted-pet">
                        <div className="pet-wrapper">
                            <div className="pet-image" style={{backgroundImage: "url('/leo.jpg')"}}></div>
                            <div className="pet-info">
                                <h5 className="pet-name">Leo</h5>
                                <p className="pet-history">
                                    Life was hard on him... but now Leo has an amazing family and is
                                    being loved unconditionally.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="adopted-pet">
                        <div className="pet-wrapper">
                            <div className="pet-image" style={{backgroundImage: "url('/roxi.jpg')"}}></div>
                            <div className="pet-info">
                                <h5 className="pet-name">Roxi</h5>
                                <p className="pet-history">
                                    This is Roxi - such a kind and beautiful soul. She found her
                                    family not long ago... and now they treat her like a princess.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="adopted-pet">
                        <div className="pet-wrapper">
                            <div className="pet-image" style={{backgroundImage: "url('/clara.jpg')"}}></div>
                            <div className="pet-info">
                                <h5 className="pet-name">Clara</h5>
                                <p className="pet-history">
                                    Clara has been dreaming for a family, who will promise love her.
                                    Now she has finally found it and smiles more than ever on strolls.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}