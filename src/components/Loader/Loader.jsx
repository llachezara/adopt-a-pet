import styles from './Loader.module.css'

export function Loader() {
    return (
        <div className={styles["loader-overlay"]}>
            <div className={styles["loader-backdrop"]}></div>
            <div className={styles["loader"]}></div>
        </div>
    )
}