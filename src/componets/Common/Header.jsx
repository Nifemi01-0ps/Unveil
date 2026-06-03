import { useNavigate } from "react-router";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header({ ownedCount, stories = [], ownedIds = [] }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const dynamicCollection = stories.filter(story => ownedIds.includes(story.id));

    function handleNavClick(path) {
        setMenuOpen(false);
        navigate(path);
    }
    return <div className={styles.headerWrapper}>
        {/* Black Top Area */}
        <header className={styles.headerBar}>
            <span onClick={() => handleNavClick('/')} className={styles.logo}>
                Unveil
            </span>

             {/* Animated Hamburger Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className={styles.menuToggleButton} aria-label="ToggleCollection Menu">
            <div className={styles.hamburgerLine} style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div className={styles.hamburgerLine} style={{ opacity: menuOpen ? 0 : 1 }} />
            <div className={styles.hamburgerLine} style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'}} />
        </button>
        </header>
        {/* Expandable Collection DropDown */}
        {menuOpen && (
            <nav className={styles.dropDownContainer}>
                <div className={styles.dropDownSection}>
                    <p className={styles.sectionLabel}>Navigation Links</p>
                    <button onClick={() => handleNavClick('/onboarding')} className={styles.dropDownLink}>
                      🗝️ OnBoarding
                    </button>
                    <button onClick={() => handleNavClick('/feed')} className={styles.dropDownLink}>
                        ✨ Discovery Feed
                    </button>
                    <button onClick={() => handleNavClick('/library')} className={styles.dropDownLink}>
                       📚 Collector Library ({ownedCount}) 
                    </button>
                </div>
                <div className={styles.dropDownSectionDivider}>
                    <p className={styles.sectionLabel}>Your Attuned Collections</p>
                    {dynamicCollection.length === 0 ? (
                        <p className={styles.fallbackText}>No active story foundation attened yet.</p>
                    ): (
                        <div className={styles.collectionShortcutList}>
                            {dynamicCollection.map((story) => (
                                <button key={story.id} onClick={() => handleNavClick(`/story/${story.id}`)} className={styles.collectionShortcut}>
                                    <span className={styles.shortcutBullet}>✦</span>
                                    {story.title}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        )}
       
    </div>
}