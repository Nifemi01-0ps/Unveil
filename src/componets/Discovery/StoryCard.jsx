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
                {story.artist}
            </p>
            <EditorialTitle level="h2" style={{ marginBottom: '1.5rem' }}>
                {story.hook}
            </EditorialTitle>
            <Button variant="accent" to={`/story${story.id}`}>
                Enter Journey
            </Button>
        </article>
    )
})