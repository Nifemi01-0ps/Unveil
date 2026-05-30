import styles from "./MobileContainer.module.css";
export default function MobileContainer({children, breakpoint = 'default' }) {
       const widthProfiles = {
        phoneOnly: '480px',
        default: '480px',
        tabletAdapt: '768px',
        wideGallery: '1024px'
       };
       
       const targetMaxWidth = widthProfiles[breakpoint] || breakpoint;

       return (
        <div className={styles.container} style={{ maxWidth: targetMaxWidth }}>
            {children}
        </div>
       );
}