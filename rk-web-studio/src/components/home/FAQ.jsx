import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../data/faq.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Everything you need to know before getting started."
        />

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <div className="card-surface overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display font-medium text-ink">{item.q}</span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center transition-transform duration-400 ${
                      open === i ? 'rotate-45 bg-mesh-primary border-transparent' : ''
                    }`}
                  >
                    <Plus className="w-4 h-4 text-ink" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-ink-muted text-sm leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
