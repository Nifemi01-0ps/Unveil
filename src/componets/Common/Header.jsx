import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
export default function Header({ currentView }) {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <button onClick={() => navigate('/feed')} className={styles.logoButton}>
                Unveil
            </button>
            <nav aria-label="Main-Navigation">
                <button onClick={() => navigate('/library')} className={`${styles.navButton} ${currentView === '/library' ? styles.navButtonActive : ''}`}>
                    My Collection
                </button>
            </nav>
        </header>
    );
}