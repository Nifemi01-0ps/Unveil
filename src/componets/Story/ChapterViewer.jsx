import ArtworkReveal from "./ArtWorkReveal.jsx";
import { EditorialTitle, EditorialBody } from "../UI/Typography.jsx";
import Button from "../UI/Button.jsx";
import styles from "./ChapterViewer.module.css";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function ChapterViewer({ stories, onJourneyOwned }) {
    const [currentStep, setCurrentStep] = useState(1);
    const topRef = useRef(null);  
    const { id } = useParams();
    
    const story = stories.find((s) => s.id === id);
     useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentStep]);

      if (!story) {
        return (
            <div className={styles.notStoryDiv}>
                <p>Story not found or loading invalid journey identifier.</p>
            </div>
        );
    }
    const steps = Array.from(
        { length: story.chapters.length + 1},
        (_, index) => index + 1
    );
    if (currentStep === steps.length) {
        return (
            <ArtworkReveal story={story} onJourneyOwned={onJourneyOwned}/>
        );
    }

    const activeChapter = story.chapters[currentStep - 1];

    return (
        <article ref={topRef} className={styles.article}>
            {/* Unveil Sub Header Info */}
            <div className={styles.subHeader}>
                <p className={styles.journalVolume}>
                    {story.title} by {story.artist} • Unveil Journal | Vol. 1
                </p>
            </div>
            
            {/* Progress Bar */}
            <div className={styles.progressBarContainer} aria-hidden="true">
                {steps.map((step) => (
                    <div key={step} className={`${styles.progressBarStep} ${step <= currentStep ? styles.progressStepActive : ''}`}/>
                ))}
            </div>

            {/* Header */}
            <header className={styles.header}>
                <EditorialTitle level="h2" style={{ fontSize: '1.4rem', color: 'var(--color-dark)', lineHeight: '1.3', marginBottom: '1.75rem', fontFamily: 'Georgia, serif', fontWeight: '400' }}>
                    Chapter {currentStep}: {activeChapter?.title || "Archival Entry"}
                </EditorialTitle>
                <span className={styles.subtitle}>
                    {activeChapter?.subtitle || 'Creative Execution Crises'}
                </span>
            </header>

            {/* Content */}
            <section className={styles.mainSection}>
                <EditorialBody style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-dark)' }}>
                    {activeChapter?.content || "No text payload configured for this segment."}
                </EditorialBody>
                <div className={styles.imageWrapper}>
                    <img src={story.imageUrl} alt={story.artworkAlt || ""} className={styles.image} />
                </div>
            </section>

            {/* Unveil Footer */}
            <footer className={styles.footer}>
                <Button variant="primary" onClick={() => setCurrentStep((prev) => prev + 1)}>
                    {currentStep === steps.length - 1 ? 'Reveal Artwork' : 'Unlock Next Chapter'}
                </Button>
            </footer>
        </article>
    );
}