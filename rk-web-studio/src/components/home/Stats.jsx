import Reveal from '../ui/Reveal.jsx';
import Counter from '../ui/Counter.jsx';

const stats = [
  { value: 60, suffix: '+', label: 'Websites Delivered' },
  { value: 45, suffix: '+', label: 'Happy Clients' },
  { value: 98, suffix: '%', label: 'On-Time Delivery' },
  { value: 4, prefix: '', suffix: '.9/5', label: 'Average Rating' },
];

export default function Stats() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="card-surface p-8 text-center hover:border-primary-500/40 transition-colors duration-500 group">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <p className="mt-3 text-sm text-ink-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
