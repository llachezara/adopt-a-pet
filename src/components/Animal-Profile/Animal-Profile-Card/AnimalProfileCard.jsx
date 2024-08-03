import styles from './AnimalProfileCard.module.css';

export default function AnimalProfileCard({
    animalData
}) {
    return (
        <div className={styles["pet-for-adoption-wrapper"]}>
            <div className={styles["pet-for-adoption"]}>
                <div className={styles["pet-image-container"]}>
                    <img className={styles["pet-image"]} src={animalData.imageUrl} alt="Pet for adoption" />
                    <h5 className={styles["pet-name"]}>{animalData.name}</h5>
                </div>
                <div className={styles["pet-info-wrapper"]}>
                    <div className={styles["pet-info"]}>
                        <p className={styles["pet-species"]}>Species: {animalData.species}</p>
                        <p className={styles["pet-breed"]}>Breed: {animalData.breed}</p>
                        <p className={styles["pet-age"]}>Age: {animalData.age}</p>
                    </div>
                    <button className={styles["pet-details-button"]}>Details</button>
                </div>
            </div>
        </div>
    )
}