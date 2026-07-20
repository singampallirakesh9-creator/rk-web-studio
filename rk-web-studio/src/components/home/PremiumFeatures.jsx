import { Gauge, Smartphone, Search, ShieldCheck, Sparkles, MessageSquareText } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

const features = [
  { title: 'Lightning Fast', description: 'Optimized for 95+ Lighthouse scores on every build.', icon: Gauge, big: true },
  { title: 'Mobile-First', description: 'Every layout is designed for phones first, then scaled up.', icon: Smartphone },
  { title: 'SEO Ready', description: 'Structured data, meta tags and clean semantic markup.', icon: Search },
  { title: 'Secure by Default', description: 'SSL, secure hosting and best-practice configuration.', icon: ShieldCheck },
  { title: 'Premium Animations', description: 'Subtle, purposeful motion that feels expensive.', icon: Sparkles },
  { title: 'Direct Support', description: 'Real conversations with Rakesh, not a ticket queue.', icon: MessageSquareText },
];

export default function PremiumFeatures() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Premium Features"
          title="Everything a modern website needs"
          align="left"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 0.08}
              className={f.big ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <div
                className={`group relative card-surface p-8 h-full overflow-hidden hover:border-primary-500/40 transition-colors duration-500 ${
                  f.big ? 'min-h-[280px] flex flex-col justify-end bg-mesh-primary/[0.04]' : ''
                }`}
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary-500/10 blur-2xl group-hover:bg-primary-500/20 transition-colors duration-500" />
                <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-400 mb-6">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="relative font-display font-semibold text-xl text-ink mb-2">{f.title}</h3>
                <p className="relative text-ink-muted text-sm leading-relaxed">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
