import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowUpRight, Compass } from 'lucide-react';
import SEO from '../components/ui/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Head back to RK Web Studio's homepage."
        path="/404"
      />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-glow" />
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-[12%] w-72 h-72 rounded-full bg-primary-500/20 blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute bottom-10 right-[10%] w-72 h-72 rounded-full bg-accent-500/20 blur-[100px]"
        />

        <div className="container-px mx-auto max-w-3xl relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow justify-center mb-6"
          >
            <Compass className="w-3.5 h-3.5" />
            Error 404
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-7xl sm:text-8xl lg:text-9xl leading-none text-gradient"
          >
            404
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-2xl sm:text-3xl font-display font-semibold text-ink"
          >
            This page took a wrong turn.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-ink-muted max-w-md mx-auto leading-relaxed"
          >
            The page you're looking for doesn't exist or may have moved. Let's get you back to
            somewhere useful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
