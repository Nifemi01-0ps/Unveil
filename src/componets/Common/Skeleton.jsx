import styles from "./Skeleton.module.css";
export default function Skeleton() {
    return (
        <div className={styles.container} aria-label="true">
            <div className={styles.title}></div>
            <div className={styles.lineFull}></div>
            <div className={styles.linePartial}></div>
        </div>
    );
}