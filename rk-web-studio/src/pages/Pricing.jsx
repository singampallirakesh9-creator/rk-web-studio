import * as Icons from 'lucide-react';
import SEO from '../components/ui/SEO.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Pricing from '../components/home/Pricing.jsx';
import FAQ from '../components/home/FAQ.jsx';
import CTA from '../components/home/CTA.jsx';
import { guarantees } from '../data/pricing.js';

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent, one-time pricing for premium websites built by RK Web Studio. Starter, Growth and Premium plans for every budget."
        path="/pricing"
      />

      <section className="pt-40 pb-10 relative">
        <div className="absolute inset-0 bg-grid-glow opacity-60" />
        <div className="container-px mx-auto max-w-4xl text-center relative">
          <Reveal>
            <span className="eyebrow mb-5 justify-center">
              <span className="w-6 h-px bg-accent-400" />
              Pricing
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] text-ink">
              Fair pricing, <span className="text-gradient">premium result.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg text-ink-muted max-w-xl mx-auto">
              Choose the plan that fits your business — every plan includes a fully
              custom, responsive, production-ready website.
            </p>
          </Reveal>
        </div>
      </section>

      <Pricing />

      <section className="pb-10">
        <div className="container-px mx-auto max-w-7xl grid sm:grid-cols-3 gap-6">
          {guarantees.map((g, i) => {
            const Icon = Icons[g.icon] || Icons.ShieldCheck;
            return (
              <Reveal key={g.title} delay={i * 0.1}>
                <div className="card-surface p-7 text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-400 mx-auto mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-ink mb-1.5">{g.title}</h3>
                  <p className="text-sm text-ink-muted">{g.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
