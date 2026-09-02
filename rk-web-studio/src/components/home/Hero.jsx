import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Counter from '../ui/Counter.jsx';

const words = ['Modern', 'Websites', 'That', 'Grow', 'Your', 'Business.'];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-glow" />
      <motion.div
        style={{ y }}
        className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-primary-500/20 blur-[120px] animate-float"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute bottom-0 -left-20 w-[28rem] h-[28rem] rounded-full bg-accent-500/20 blur-[110px] animate-float"
      />

      <div className="container-px mx-auto max-w-7xl relative grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="eyebrow mb-7"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Trusted by 60+ local businesses
          </motion.div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-ink">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3 md:mr-4">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block ${
                    ['Grow', 'Your', 'Business.'].includes(word) ? 'text-gradient' : ''
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-7 text-lg text-ink-muted max-w-lg leading-relaxed"
          >
            RK Web Studio designs premium, high-converting websites for restaurants, salons, gyms,
            clinics and growing businesses — built by Rakesh, one project at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Start Your Project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link to="/portfolio" className="btn-ghost">
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-14 flex items-center gap-8"
          >
            <div>
              <div className="text-3xl font-display font-bold text-ink">
                <Counter to={10} suffix="+" />
              </div>
              <p className="text-xs text-ink-faint mt-1">Websites Delivered</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="flex items-center gap-1 text-3xl font-display font-bold text-ink">
                <Counter to={5} suffix=".0" />
                <Star className="w-5 h-5 fill-accent-400 text-accent-400 ml-1" />
              </div>
              <p className="text-xs text-ink-faint mt-1">Average Client Rating</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-xl3 overflow-hidden border border-white/10 shadow-card">
            <img
  src="https://raw.githubusercontent.com/singampallirakesh9-creator/rk-web-studio/main/file_00000000978c82118d7ca20b749ac9e3.png"
  alt="RK Web Studio"
  className="w-full h-[560px] object-contain"
/>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-8 top-10 glass rounded-xl2 p-4 shadow-card w-52"
          >
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent-400 text-accent-400" />
              ))}
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              "Bookings tripled within a month of launch."
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -right-6 bottom-10 glass rounded-xl2 p-4 shadow-card"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-mesh-primary flex items-center justify-center text-white font-display font-bold text-sm">
                R
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Rakesh</p>
                <p className="text-xs text-ink-faint">Founder, RK Web Studio</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
