import { Link } from 'react-router-dom';
import styles from './AnimalProfileCard.module.css';

export default function AnimalProfileCard({
    animalData
}) {
    return (
        <div className={styles["pet-for-adoption-wrapper"]}>
            <div className={styles["pet-for-adoption"]}>
                <div className={styles["pet-image-container"]}>
                    <img className={styles["pet-image"]} src={animalData.imageUrl || "/default-image.jpg"} alt="Pet for adoption" />
                    {animalData.isAdopted && <span className={styles["animal-photo-adopted"]}></span>}
                    <h5 className={styles["pet-name"]}>{animalData.name}</h5>
                </div>
                <div className={styles["pet-info-wrapper"]}>
                    <div className={styles["pet-info"]}>
                        <p className={styles["pet-species"]}>Species: {animalData.species}</p>
                        <p className={styles["pet-breed"]}>Breed: {animalData.breed}</p>
                        <p className={styles["pet-age"]}>Age: {animalData.age}</p>
                    </div>
                    <Link to={`/animal-profile/${animalData.id}/details`} className={styles["pet-details-button"]}>Details</Link>
                </div>
            </div>
        </div>
    )
}