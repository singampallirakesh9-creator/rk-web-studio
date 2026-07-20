import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { coreServices } from '../../data/services.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function Services() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Build"
          title="Websites for every kind of business"
          description="From restaurants to real estate — a design language tailored to your industry, built to convert."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.slice(0, 9).map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Layers;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <Link
                  to="/services"
                  className="group relative block card-surface p-7 h-full overflow-hidden hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary-500/40 transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-mesh-primary/[0.06]" />
                  <div className="relative flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-400 group-hover:bg-mesh-primary group-hover:text-white group-hover:border-transparent transition-all duration-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink-faint opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                  </div>
                  <h3 className="relative font-display font-semibold text-lg text-ink mb-2">
                    {s.title}
                  </h3>
                  <p className="relative text-sm text-ink-muted leading-relaxed">{s.description}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-ghost">
              View All Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
