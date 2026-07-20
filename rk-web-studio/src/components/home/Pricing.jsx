import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pricingPlans } from '../../data/pricing.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function Pricing() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Investment"
          title="Simple, transparent pricing"
          description="One-time pricing. No subscriptions, no surprise invoices."
        />

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-xl3 p-8 h-full flex flex-col ${
                  plan.highlighted
                    ? 'bg-mesh-primary shadow-glow scale-[1.03]'
                    : 'card-surface'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-surface text-xs font-semibold px-4 py-1.5 rounded-full text-ink border border-white/15">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-display font-semibold text-xl ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-2 ${plan.highlighted ? 'text-white/80' : 'text-ink-muted'}`}>
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={`text-4xl font-display font-bold ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
                    ₹{plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-ink-faint'}`}>
                    /{plan.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-3.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? 'text-white' : 'text-accent-400'}`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-ink-muted'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-8 text-center rounded-full py-3.5 font-display font-semibold text-sm transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-primary-600 hover:shadow-lg'
                      : 'border border-white/15 text-ink hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
