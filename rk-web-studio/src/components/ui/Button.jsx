import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
  type = 'button',
}) {
  const cls = `${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} group ${className}`;
  const content = (
    <>
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (to) return <Link to={to} className={cls}>{content}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{content}</a>;
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
