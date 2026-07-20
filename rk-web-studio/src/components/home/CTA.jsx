import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal.jsx';

export default function CTA() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="relative rounded-xl3 overflow-hidden p-14 md:p-20 text-center bg-mesh-primary bg-200% animate-gradient-x">
            <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-40" />
            <div className="relative">
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white leading-[1.05] max-w-3xl mx-auto">
                Ready for a website that actually grows your business?
              </h2>
              <p className="mt-6 text-white/85 text-lg max-w-xl mx-auto">
                Book a free 20-minute discovery call and let's talk about what you need.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full font-display font-semibold hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Your Free Quote
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919182285902"
                  className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 rounded-full font-display font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Call Rakesh Directly
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
