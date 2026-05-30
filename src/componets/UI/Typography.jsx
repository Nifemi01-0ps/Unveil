export function EditorialTitle({ children, level = 'h2', style = {} }) {
  const Tag = level;
  
  const defaultStyle = {
    fontFamily: 'Georgia, serif',
    fontSize: level === 'h1' ? 'var(--font-size-h1)' : 'var(--font-size-h2)',
    fontWeight: '400',
    lineHeight: '1.2',
    color: 'var(--color-dark)',
    marginBottom: '1rem'
  };

  return <Tag style={{ ...defaultStyle, ...style }}>{children}</Tag>;
}

export function EditorialBody({ children, style = {} }) {
  return (
    <p style={{
      fontSize: 'var(--font-size-body)',
      maxWidth: 'var(--max-width-reading)',
      color: 'var(--color-dark)',
      marginBottom: '1.5rem',
      letterSpacing: '-0.01em',
      lineHeight: '1.6',
      ...style
    }}>
      {children}
    </p>
  );
}