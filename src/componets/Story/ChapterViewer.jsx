import ArtworkReveal from "./ArtWorkReveal.jsx";
import { EditorialTitle, EditorialBody } from "../UI/Typography.jsx";
import Button from "../UI/Button.jsx";
import styles from "./ChapterViewer.module.css";
import { useEffect, useRef, useState } from "react";

export default function ChapterViewer({ story, onJourneyOwned }) {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [1, 2, 3, 4];
    const topRef = useRef(null);  
    
    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behaviour: 'smooth' });
        }
    }, [currentStep]);

    if (currentStep === 4) {
        return <ArtworkReveal story={story} onJourneyOwned={onJourneyOwned}/>
    }
    const activeChapter = story.chapters.find(
        c => c.id === currentStep
    );
    return (
        <article ref={topRef} className={styles.article}>
            {/* Progress Bar */}
            <div className={styles.progressBarContainer} aria-hidden="true">
                {steps.map((step) => (
                    <div key={step} className={`${styles.progressBarStep} ${step <= currentStep ? styles.progressStepActive : ''}`}/>
                ))}
            </div>

            <header className={styles.header}>
                <span className={styles.subtitle}>
                    {activeChapter.subtitle}
                </span>
                <EditorialTitle level="h1" style={{ marginTop: '0.5rem' }}>
                    {activeChapter.title}
                </EditorialTitle>
            </header>

            <section className={styles.mainSection}>
                <EditorialBody style={{ lineHeight: '1.8', textAlign: 'justify'}}>
                    {activeChapter.content}
                </EditorialBody>
            </section>
            <footer className={styles.footer}>
                <Button variant="primary" onClick={() => setCurrentStep(prev => prev + 1)}>
                    {currentStep === 3 ? 'Step Into the Reveal' : 'Continue Journey'}
                </Button>
            </footer>
        </article>
    );
}