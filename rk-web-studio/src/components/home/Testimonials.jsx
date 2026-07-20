import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function Testimonials() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client Love"
          title="Don't just take our word for it"
          description="Feedback from business owners who trusted RK Web Studio with their online presence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.1}>
              <div className="card-surface p-7 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-500">
                <Quote className="w-8 h-8 text-primary-500/30 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="text-ink-muted leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-ink-faint">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
