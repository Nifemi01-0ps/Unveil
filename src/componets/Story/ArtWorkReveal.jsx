import { useEffect, useState } from "react";
import Button from "../UI/Button.jsx";
import styles from "./ArtworkReveal.module.css";

export default function ArtworkReveal({ story, onJourneyOwned }) {
    const [isRevealed, setIsRevealed] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsRevealed(true);
        }, 150);

        return () => {
            clearTimeout(timer);
        }
    }, []);
    function handleClick() {
        onJourneyOwned(story.id)
    }
    return (
        <article className={`${styles.article} ${isRevealed ? styles.articleRevealed : ''}`}>
            <header className={styles.header}>
                <span className={styles.label}>
                    The Culmination
                </span>
                <h1 className={styles.title}>
                    {story.title}
                </h1>
                <p className={styles.artist}>By {story.artist}</p>
            </header>
            <div className={styles.imageContainer}>
                <img
                    src={story.imageUrl}
                    alt={story.artworkAlt}
                    className={styles.image}
                />
            </div>
            <Button variant="primary" style={{
                border: '1px solid var(--color-accent)'
            }} onClick={handleClick}>
                Own This Journey
            </Button>
        </article>
    );
}