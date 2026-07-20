import { CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';

const reasons = [
  'Custom design — never a recycled template',
  'Built with modern, fast, SEO-friendly code',
  'Direct communication with Rakesh, no middlemen',
  'Transparent pricing with zero hidden fees',
  'Post-launch support and ongoing maintenance',
];

export default function WhyChooseUs() {
  return (
    <section className="section-py relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <Reveal dir="left">
          <div className="relative">
            <div className="rounded-xl3 overflow-hidden border border-white/10 shadow-card">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80"
                alt="Rakesh reviewing a modern website design on a laptop"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 glass rounded-xl2 p-5 shadow-card w-56">
              <p className="text-3xl font-display font-bold text-gradient">5+ yrs</p>
              <p className="text-xs text-ink-muted mt-1">Building premium web experiences</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow mb-4">
              <span className="w-6 h-px bg-accent-400" />
              Why RK Web Studio
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.08] text-ink mb-6">
              A studio experience, without the studio price tag
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="text-ink-muted text-lg leading-relaxed mb-8">
              You work directly with the person building your website — no account managers,
              no outsourced developers, no guesswork. Just a clear process and a site you'll
              be proud to share.
            </p>
          </Reveal>

          <div className="space-y-4">
            {reasons.map((r, i) => (
              <Reveal key={r} delay={0.05 * i}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                  <span className="text-ink-muted">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
