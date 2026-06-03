import Button from "../UI/Button.jsx";
import { EditorialTitle, EditorialBody } from "../UI/Typography.jsx";
import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <span className={styles.errorCode}>
                Error 404
            </span>
            <EditorialTitle level="h1">This Portal Does Not Exist</EditorialTitle>
            <EditorialBody className={styles.description}>The story you are trying to read has been archived, or canvas hasn't been released yet.</EditorialBody>
            <Button variant="accent" to='/feed'>
                Return to Exhibition
            </Button>
        </div>
    );
}
