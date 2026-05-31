import StoryCard from "./StoryCard.jsx";
import styles from "./DiscoveryFeed.module.css";
export default function DiscoveryFeed({ stories }) {
    return (
        <section aria-label="Curated Artwork Discoveries">
            <div className={styles.feedHeader}>
                <p className={styles.feedTitle}>
                    Today's Curated Portals
                </p>
            </div>
            {stories.map((story) => (
                <StoryCard key={story.id} story={story}/>
            ))}
        </section>
    )
}