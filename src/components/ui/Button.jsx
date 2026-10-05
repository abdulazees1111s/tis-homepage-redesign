export function Button({ children, href, icon: Icon, variant = 'primary', className = '' }) {
  return (
    <a className={`button button--${variant} ${className}`} href={href}>
      <span>{children}</span>
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
    </a>
  );
}
