import styles from "./Footer.module.css"
import { useFooter } from "../../hooks/useFooter";

export default function Footer() {
    const { renderFooter, renderBigFooter } = useFooter();

    if (!renderFooter) {
        return null;
    }

    return (

        renderBigFooter ? (
            <footer className={styles["big-footer"]} >
                <div className={styles["footer-content"]}>
                    <div className={styles["main-footer"]}>
                        <div className={styles["main-footer-info"]}>
                            <span className={styles["main-footer-info-heading"] + " logo"}>AdoptAPet</span>
                            <p className={styles["last-words"]}>
                                Every pet deserves a loving home. Connecting compassionate individuals
                                with their furry companions creates lasting bonds and joyful lives.
                            </p>
                        </div>
                        <div className={styles["contact"]}>
                            <h6 className={styles["contact-us-heading"]}>Contact us</h6>
                            <ul className={styles["contact-us-list"]}>
                                <li className={styles["contact-li"]}>adoptapet@gmail.com</li>
                                <li className={styles["contact-li"]}>+359899777524</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["additional-footer"]}>
                        <div className={styles["content-container"]}>
                            <span id={styles["rights"]}>© 2024. All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </footer >) :

            (<footer className={styles["small-footer"]}>
                <div className={styles["footer-content"]}>
                    <div className={styles["additional-footer"]}>
                        <div className={styles["content-container"]}>
                            <span id={styles["rights"]}>© 2024. All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>)
    )
}

