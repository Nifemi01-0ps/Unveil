import { Link } from "react-router";

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false,
  ariaLabel,
  to, 
}) {
  const baseStyle = {
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'inherit',
    border: 'none',
    background: 'none',
    minHeight: 'var(--touch-target-min)',
    minWidth: 'var(--touch-target-min)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontSize: 'var(--font-size-body)',
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.4 : 1
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-dark)',
      color: 'var(--color-bg)',
      fontWeight: '500'
    },
    accent: {
      border: '1px solid var(--color-accent)',
      color: 'var(--color-dark)',
      backgroundColor: 'transparent'
    }
  };

  const combinedStyle = { ...baseStyle, ...variants[variant] };
  if (to) {
    return (
      <Link to={to} style={combinedStyle} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }
  return (
    <button
      style={combinedStyle}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}