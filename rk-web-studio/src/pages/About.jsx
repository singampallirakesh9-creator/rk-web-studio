import { Award, Users, Coffee, Code2 } from 'lucide-react';
import SEO from '../components/ui/SEO.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Counter from '../components/ui/Counter.jsx';
import CTA from '../components/home/CTA.jsx';

const values = [
  { title: 'Craft over templates', description: 'Every project starts from a blank canvas, shaped around your brand.', icon: Code2 },
  { title: 'Real relationships', description: 'You talk to Rakesh directly — before, during and after launch.', icon: Users },
  { title: 'Results that matter', description: 'Design decisions are made to drive bookings, calls and sales.', icon: Award },
  { title: 'Genuine care', description: 'Your business success is treated like a personal project, not a task.', icon: Coffee },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Meet Rakesh, founder of RK Web Studio — a one-person studio building premium websites for local businesses."
        path="/about"
      />

      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-glow opacity-60" />
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <Reveal>
              <span className="eyebrow mb-5">
                <span className="w-6 h-px bg-accent-400" />
                About RK Web Studio
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-[1.05] text-ink mb-6">
                Hi, I'm Rakesh — I build websites that work as hard as you do.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-ink-muted text-lg leading-relaxed mb-5">
                RK Web Studio started with a simple observation: too many great local
                businesses were being represented online by outdated, slow, or generic
                websites that didn't reflect the quality of what they actually offered.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="text-ink-muted text-lg leading-relaxed">
                Today I work with restaurants, salons, gyms, clinics and growing brands to
                design and build websites that feel premium, load fast, and — most
                importantly — turn visitors into paying customers.
              </p>
            </Reveal>
          </div>

          <Reveal dir="right">
            <div className="relative rounded-xl3 overflow-hidden border border-white/10 shadow-card">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
                alt="Rakesh's coding workspace with laptop and coffee"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-py">
        <div className="container-px mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 60, suffix: '+', label: 'Projects Delivered' },
            { value: 45, suffix: '+', label: 'Happy Clients' },
            { value: 5, suffix: '+', label: 'Years of Experience' },
            { value: 12, suffix: '', label: 'Industries Served' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="card-surface p-8 text-center">
                <div className="text-4xl font-display font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-sm text-ink-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-py">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="What I Believe" title="How I work with every client" />
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.1}>
                <div className="card-surface p-8 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-400 shrink-0">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-ink mb-2">{v.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
