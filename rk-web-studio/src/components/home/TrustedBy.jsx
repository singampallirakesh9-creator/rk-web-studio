import { trustedByLogos } from '../../data/testimonials.js';

export default function TrustedBy() {
  const loop = [...trustedByLogos, ...trustedByLogos];
  return (
    <section className="py-14 border-y border-white/10 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl mb-8">
        <p className="text-center text-xs tracking-[0.2em] uppercase text-ink-faint">
          Trusted by growing businesses across India
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />
        <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
          {loop.map((name, i) => (
            <span
              key={i}
              className="text-2xl font-display font-semibold text-ink-faint/60 hover:text-ink-muted transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
