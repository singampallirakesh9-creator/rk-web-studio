import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolio.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function FeaturedPortfolio() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Real businesses, real results"
          description="A look at recent projects and the measurable impact they made."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.12}>
              <div className="group relative rounded-xl3 overflow-hidden border border-white/10 card-surface">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} website screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/20 to-transparent" />
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

        <Reveal delay={0.15}>
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="btn-primary">
              See Full Portfolio
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
