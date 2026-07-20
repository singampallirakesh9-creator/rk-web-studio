import { useState, useMemo } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SEO from '../components/ui/SEO.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import CTA from '../components/home/CTA.jsx';
import { projects, categories } from '../data/portfolio.js';

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <SEO
        title="Portfolio"
        description="Case studies and live projects built by RK Web Studio for restaurants, salons, gyms, clinics, real estate and travel businesses."
        path="/portfolio"
      />

      <section className="pt-40 pb-16 relative">
        <div className="absolute inset-0 bg-grid-glow opacity-60" />
        <div className="container-px mx-auto max-w-4xl text-center relative">
          <Reveal>
            <span className="eyebrow mb-5 justify-center">
              <span className="w-6 h-px bg-accent-400" />
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] text-ink">
              Work we're <span className="text-gradient">proud of.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-px mx-auto max-w-7xl flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c
                  ? 'bg-mesh-primary text-white shadow-glow'
                  : 'border border-white/10 text-ink-muted hover:text-ink hover:border-white/25'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-8">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.1}>
              <div className="group relative rounded-xl3 overflow-hidden border border-white/10 card-surface">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} website screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/30 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <a href={p.demo} className="w-9 h-9 rounded-full glass flex items-center justify-center text-ink" aria-label="Live demo">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={p.github} className="w-9 h-9 rounded-full glass flex items-center justify-center text-ink" aria-label="GitHub repo">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <span className="eyebrow !text-accent-400/90 mb-1">{p.category}</span>
                      <h3 className="font-display font-bold text-xl text-ink">{p.title}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xl font-display font-bold text-gradient">{p.stats.value}</p>
                      <p className="text-[11px] text-ink-faint">{p.stats.metric}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-ink-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
