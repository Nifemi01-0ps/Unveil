import { EditorialTitle } from "../UI/Typography";
import Button from "../UI/Button";
import bapoqueImg from "../../assets/art5.avif";
import styles from "./CollectorLibrary.module.css";
import { useState } from "react";

export default function CollectorLibrary({ ownedIds = [1], stories = [] }) {
    const [view, setView] = useState('archive');
    const [selectedStory, setSelectedStory] = useState(null);
    const [activeChapter, setActiveChapter] = useState(0);

    const ownedStories = stories.filter(s => ownedIds.includes(s.id));
    const displayStories = ownedStories.length > 0 ? ownedStories : [
        {
            id: 'artwork-05',
            title: 'What the Ceiling Knows',
            artist: 'Isabeau Fontaine',
            category: 'Figurative',
            imageUrl: bapoqueImg,
            artworkAlt: 'A sweeping Baroque ceiling fresco study depicting dozens of mythological figures — gods, angels, warriors and cherubs — tumbling through dramatic storm clouds with golden light breaking through the upper register',
            hook: 'The gods were never calm. Why did we think we had to be?',
            chapters: [
                {
                id: 1,
                title: 'The Moment Before',
                subtitle: 'Inspiration and Origins',
                content: 'I spent two weeks lying on my back on a wooden scaffold inside a deconsecrated chapel in Lyon in the summer of 2023, studying a ceiling fresco that most visitors walked past in under thirty seconds. What struck me was not the grandeur of it — it was the chaos. Every figure in that painting was mid-motion, mid-conflict, mid-fall. No one was at rest. Not a single god, not a single angel. The whole celestial hierarchy was in a state of perpetual turbulence, and it had been painted that way deliberately as something magnificent. I had spent my entire adult life trying to appear composed. This ceiling laughed at that.'
                },
                {
                id: 2,
                title: 'The Struggle Inside the Work',
                subtitle: 'Process and Collapse',
                content: 'I made fourteen preparatory studies before touching the final surface. The figures defeated me repeatedly — Baroque anatomy is exaggerated in ways that feel wrong until suddenly they feel more true than realism. A shoulder twisted beyond its natural range. A torso caught mid-spiral. I kept correcting toward anatomical accuracy and every correction made the figures weaker, more static, more suburban. The breakthrough came when I stopped consulting my anatomy references entirely and just painted the feeling of falling upward. After that, the figures arrived quickly.'
                },
                {
                id: 3,
                title: 'What I Want You to Carry',
                subtitle: 'Meaning & Reflection',
                content: 'Look at the center of this piece — the figure in blue ascending through the gold. She is not serene. Her body is working hard, her drapery is fighting the wind, her face holds something between terror and joy. I want whoever owns this to remember her on the days when moving forward feels violent. Ascension was never supposed to be graceful. It was always supposed to cost something.'
                }
            ],
            certificateId: 'Unveil-NFT-0x71C...892A' // Retained placeholder certificate ID for View 3
        }
    ];
    // Journey Grid
    if (view === 'archive') {
        return (
            <section className={styles.container}>
                <header className={styles.header}>
                    <EditorialTitle level="h1">Collector Library</EditorialTitle>
                    <p className={styles.subtitle}>Your Attuned Journeys</p>
                    <div className={styles.divider}></div>
                </header>
                <div className={styles.headingWrapper}>
                    <h2 className={styles.sectionHeading}>Journey Archive</h2>
                </div>
                <div className={styles.grid}>
                    {displayStories.map((story) => {
                        <div
                            key={story.id}
                            onClick={() => {setSelectedStory(story); setView('detail'); setActiveChapter(0); }}
                            className={styles.archiveCard}
                        >
                            <div className={styles.imageFrame}>
                                <img src={story.imageUrl} alt={story.artworkAlt} className={story.image} />
                            </div>
                            <div>
                                <h3 className={styles.cardTitle}>{story.title}</h3>
                                <p className={styles.cardArtist}>{story.artist}</p>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        );
    }
    // Journey Details
    if (view === 'detail') {
        const chapter = selectedStory.chapters[activeChapter] || {title: 'End', content: ''};
        return (
            <section className={styles.container}>
                <button onClick={() => setView('arhive')} className={styles.backButton}>
                    ← Back to Archive
                </button>
                <header className={styles.headerDetail}>
                    <p className={styles.tagLabel}>Journey Detail</p>
                    <EditorialTitle level="h1">{selectedStory.title}</EditorialTitle>
                </header>
                {/* Re-read story chapters segment */}
                <div className={styles.cardPreview}>
                    <h3 className={styles.chapterTitle}>
                        Chapter {activeChapter + 1} : {chapter.title}
                    </h3>
                    <p className={styles.chapterContent}>
                        {chapter.content}
                    </p>
                    {/* Chapter pagination Toggle */}
                    <div className={styles.paginationRow}>
                        <button disabled={activeChapter === 0} onClick={() => setActiveChapter(p => p - 1)} className={styles.pageNavButton}>
                            Prev Chapter
                        </button>
                        <button disabled={activeChapter >= selectedStory.chapter.length -1} onClick={() => setActiveChapter(p => p + 1)} className={styles.pageNavButton}>
                            Next Chapter
                        </button>
                    </div>
                </div>
                {/* Artwork Reveal Dispaly Panel */}
                <div className={styles.artWorkContainer}>
                    <p className={styles.artworkLabel}>
                        Revealed Artwork Foundation
                    </p>
                    <div className={styles.artworkFrame}>
                        <img src={selectedStory.imageUrl} alt={selectedStory.artworkAlt} className={styles.artworkImage} />
                    </div>
                    <Button variant="primary" onClick={() => setView('certificate')}>
                        View Ownership Certificate
                    </Button>
                </div>
            </section>
        );
    }
    if (view === 'certificate' && selectedStory) {
        return (
            <section className={styles.centeredContainer}>
                <div className={styles.certificateFrame}>
                    <span className={styles.certificateIcon}>📜</span>
                    <h1 className={styles.certificateTitle}>Ownership Certificate</h1>
                    <p className={styles.certificateLabel}>On Sui</p>

                    <div className={styles.certificateBody}>
                        <p className={styles.certifyText}>This certifies that your account holds the complete reading record and narrative right to: </p>
                        <strong className={styles.certifiedTitle}>{selectedStory.title}</strong>
                        <span className={styles.certifiedArtist}>By {selectedStory.artist}</span>
                    </div>
                    {/* Placeholder for upcoming web3 Mint connection */}
                    <div className={styles.nftBadge}>
                        <p className={styles.nftLabel}>Future Nft Receipt Node</p>
                        <code className={styles.nftCode}>selectedStory.certificateId || "PENDING_BLOCK_MINT_0x291"</code>
                    </div>
                </div>

                <button onClick={() => setView('detail')} className={styles.backButtonCertificate}>
                    ← Back to Story Review
                </button>
            </section>
        );
    }
    return null;
}