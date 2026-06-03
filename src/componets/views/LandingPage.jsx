import { Link } from "react-router";
import { EditorialTitle } from "../UI/Typography.jsx";
import { mockStories } from "../../data/mockStories.js";
import styles from "./LandingPage.module.css";
import { useRef } from "react";

export default function LandingPage() {
    const trackRef = useRef(null);
    function handleScroll(direction) {
        if (!trackRef) return;
        const track = trackRef.current;
        const cardWidth = track.firstChild?.getBoundingClientRect().width || 300;
        const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
        track.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
    return (
        <div className={styles.container}>
            {/* Hero Leader Section */}
            <section className={styles.heroSection}>
                <EditorialTitle level="h1" style={{ fontSize: '2.3rem', fontWeight: '400', lineHeight: '1.15' }}>
                    Discover the Story Behind the Art.
                </EditorialTitle>
                <p className={styles.heroSubtitle}>Unveil: The global editorial journal of human creative breakthrough.</p>
                <div className={styles.heroActionGroup}>
                    <Link to='/onboarding' className={styles.primaryButton}>
                        Get Started
                    </Link>
                    <Link to='/feed' className={styles.linkButton}>
                        Explore Featured Stories
                    </Link>
                </div>
            </section>

            {/* Featured Carousal Preview Deck */}
            <section>
                <div className={styles.carouselHeader}>
                    <h2 className={styles.carouselTitle}>
                        Featured Journeys
                    </h2>
                    <div className={styles.carouselArrows}>
                        <span onClick={() => handleScroll('prev')} className={styles.scrollBar}>&lt;</span>
                        <span onClick={() => handleScroll('next')} className={styles.scrollBar}>&gt;</span>
                    </div>
                </div>

                {/* Horizontal Scroll Track wrapper */}
                <div className={styles.carouselTrack} ref={trackRef}>
                    {[...mockStories, ...mockStories, ...mockStories].map((story, idx) => (
                        <Link key={idx} to={`/story/${story.id}`} className={styles.carouselCard}>
                            <div className={styles.cardImageWrapper}>
                                <img src={story.imageUrl} alt={story.artworkAlt} className={styles.cardImage} />
                            </div>
                            <p className={styles.cardText}>
                                {story.hook}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Slide Indicator Dots */}
                <div className={styles.indicatorDotsContainer}>
                    <span className={`${styles.dot} ${styles.dotActive}`}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
            </section>

            {/* How it Works Infographic row */}
            <section className={styles.infographicSection}>
                <h3 className={styles.infographicTitle}>How It Works</h3>
                <div className={styles.infographicGrid}>
                    <div className={styles.infographicColumn}>
                        <span className={styles.infographicIcon}>📖</span>
                        <p className={styles.infograhicText}>Read Chapter 1 Free</p>
                    </div>
                    <div className={styles.infographicColumn}>
                        <span className={styles.infographicIcon}>🔒</span>
                        <p className={styles.infograhicText}>Unlock and Experience</p>
                    </div>
                    <div className={styles.infographicColumn}>
                        <span className={styles.infographicIcon}>🎨</span>
                        <p className={styles.infograhicText}>Own the Journey</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.calloutBanner}>
                <p className={styles.calloutTitle}>
                    Own The Journey
                </p>
                <p className={styles.calloutSubtitle}>Your storytelling based platform.</p>
            </footer>
        </div>
    );
}