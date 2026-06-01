import Button from "../UI/Button.jsx";
import { EditorialTitle } from "../UI/Typography.jsx";
import styles from "./StoryCard.module.css";
import { memo } from "react";

export default memo(function StoryCard({ story }) {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <img
                    src={story.imageUrl}
                    alt={story.artworkAlt}
                    loading="lazy"
                    className={styles.image}
                />
                <div className={styles.gradientOverlay}></div>
            </div>
            <p className={styles.artistTag}>
                {story.artist || 'UNVEIL Journal'}
            </p>
            <EditorialTitle level="h2" style={{ marginBottom: '1.5rem', fontSize: '1.4rem', lineHeight: '1.2' }}>
                {story.title || 'Untitled Journey'} 
            </EditorialTitle>
            <Button variant="accent" to={`/story${story.id}`}>
                Continue Journey
            </Button>
        </article>
    );
})