import { useGetAnimalProfiles } from '../../hooks/animal-profile-hooks/useAnimalProfileQueries';

import Sidebar from './Sidebar/Sidebar';
import AnimalProfileCard from '../Animal-Profile/Animal-Profile-Card/AnimalProfileCard';
import './Dashboard.css';

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
                        {animalProfilesState.animalProfiles.map((data) =>
                            <AnimalProfileCard animalData={data} key={data.id} />
                        )}
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
