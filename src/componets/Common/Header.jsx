import { Link } from "react-router";
import styles from "./Header.module.css";
export default function Header({ currentView }) {
    return (
        <header className={styles.header}>
            <Link to='/feed' className={styles.logoButton}>
            Unveil
            </Link>
            <nav aria-label="Main-Navigation">
                <Link to='/library' className={`${styles.navButton} ${currentView === '/library' ? styles.navButtonActive : ''}`}>
                    My Collection
                </Link>
            </nav>
        </header>
    );
}