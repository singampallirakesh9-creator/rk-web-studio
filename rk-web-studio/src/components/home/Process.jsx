import * as Icons from 'lucide-react';
import { processSteps } from '../../data/services.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function Process() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title="From first call to launch day"
          description="A clear, six-step process so you always know what happens next."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => {
              const Icon = Icons[step.icon] || Icons.Sparkles;
              return (
                <Reveal key={step.step} delay={(i % 3) * 0.1}>
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl card-surface flex items-center justify-center mb-6 relative z-10">
                      <Icon className="w-7 h-7 text-accent-400" />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-mesh-primary text-white text-[11px] font-display font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-xl text-ink mb-2">{step.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
