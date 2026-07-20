import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Process from '../components/home/Process.jsx';
import CTA from '../components/home/CTA.jsx';
import { coreServices, addOnServices } from '../data/services.js';

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Website design and development services for restaurants, salons, gyms, clinics, schools, real estate and every kind of growing business."
        path="/services"
      />

      <section className="pt-40 pb-24 relative">
        <div className="absolute inset-0 bg-grid-glow opacity-60" />
        <div className="container-px mx-auto max-w-4xl text-center relative">
          <Reveal>
            <span className="eyebrow mb-5 justify-center">
              <span className="w-6 h-px bg-accent-400" />
              Services
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] text-ink">
              A website for <span className="text-gradient">every business.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg text-ink-muted max-w-xl mx-auto">
              Whichever industry you're in, RK Web Studio designs a site that fits your
              customers, your brand and your goals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 relative">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((s, i) => {
              const Icon = Icons[s.icon] || Icons.Layers;
              return (
                <Reveal key={s.title} delay={(i % 3) * 0.06}>
                  <div className="group relative card-surface overflow-hidden hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary-500/40 transition-all duration-500">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={s.image}
                        alt={`${s.title} example`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent" />
                      <div className="absolute bottom-3 left-4 w-11 h-11 rounded-xl bg-mesh-primary flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-semibold text-lg text-ink mb-2">{s.title}</h3>
                      <p className="text-sm text-ink-muted leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24 relative">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="Add-Ons" title="Grow beyond the launch" align="left" />
          <div className="grid sm:grid-cols-3 gap-6">
            {addOnServices.map((a, i) => {
              const Icon = Icons[a.icon] || Icons.Sparkles;
              return (
                <Reveal key={a.title} delay={i * 0.1}>
                  <div className="card-surface p-7 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-ink mb-1.5">{a.title}</h3>
                      <p className="text-sm text-ink-muted leading-relaxed">{a.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Process />

      <section className="pb-10 text-center">
        <Reveal>
          <Link to="/pricing" className="btn-ghost inline-flex">
            See Pricing Plans
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
