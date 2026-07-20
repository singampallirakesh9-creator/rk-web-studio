import Reveal from './Reveal.jsx';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  size = 'lg',
}) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';
  const titleSize = size === 'lg' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl';

  return (
    <div className={`flex flex-col ${alignClass} max-w-2xl ${align === 'center' ? 'mx-auto' : ''} mb-16`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-4">
            <span className="w-6 h-px bg-accent-400" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={`${titleSize} font-display font-bold leading-[1.08] text-ink`}>{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-ink-muted text-lg leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
