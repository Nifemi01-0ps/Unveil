export default function MainContent({ children, id }) {
    return (
        <main id={id} style={{
            flex: 1,
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {children}
        </main>
    );
}