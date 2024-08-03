import { useGetAnimalProfiles } from '../../hooks/animal-profile-hooks/useAnimalProfileQueries';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';

export default function () {
    const { animalProfilesState } = useGetAnimalProfiles();
    return (
        <>
            <section className="dashboard-header">
                <h1 className="dashboard-header-heading">
                    Explore the pets listed for adoption
                </h1>
            </section>
            <div className="dashboard-content-container">
                <Sidebar />
                <div className="dashboard-main-container">
                    <div className="filter-number-block">
                        <div className="inline-block">Showing</div>
                        <div className="results-count inline-block">5</div>
                        <div className="inline-block">Out of</div>
                        <div className="items-count inline-block">10</div>
                        <div className="inline-block">Results</div>
                    </div>
                    <main className="dashboard-main">
                        <div className="pet-for-adoption-wrapper">
                            <div className="pet-for-adoption">
                                <div className="pet-image-container" data-imageurl="./images/roxi.jpg">
                                    <img className="pet-image" src="https://d128mjo55rz53e.cloudfront.net/media/images/blog-breed-french_pomeranian_1.width-550.format-webp.webp" alt="Pet for adoption" />
                                    <h5 className="pet-name">Roxi</h5>
                                </div>
                                <div className="pet-info-wrapper">
                                    <div className="pet-info">
                                        <p className="pet-speecies">Species: Dog</p>
                                        <p className="pet-breed">Breed: Pomeranian</p>
                                        <p className="pet-age">Age: 1 y/o old</p>
                                    </div>
                                    <button className="pet-details-button">Details</button>
                                </div>
                            </div>
                        </div>
                    </main>
                    <div className="paginator">
                        <span className="page-info">Page 1 / 3</span>
                        <div className="page-numbers">
                            <a href="#" className="page-number active">
                                1
                            </a>
                            <a href="#" className="page-number">
                                2
                            </a>
                            <a href="#" className="page-number">
                                3
                            </a>
                        </div>
                        <a href="#" className="paginatot-next-button">
                            Next &gt;
                        </a>
                    </div>
                </div>
            </div>
        </>
    )

}
