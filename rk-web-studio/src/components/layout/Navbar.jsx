import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { coreServices } from '../../data/services.js';
import Button from '../ui/Button.jsx';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', mega: true },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`container-px mx-auto max-w-7xl flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled ? 'glass px-5 py-2.5 shadow-card' : 'px-2 py-2'
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-mesh-primary flex items-center justify-center font-display font-bold text-sm text-white group-hover:shadow-glow transition-shadow duration-300">
              RK
            </div>
            <span className="font-display font-semibold text-ink tracking-tight hidden sm:block">
              Web Studio
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => link.mega && setMegaOpen(true)}
                onMouseLeave={() => link.mega && setMegaOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 flex items-center gap-1 ${
                      isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {link.mega && <ChevronDown className="w-3.5 h-3.5" />}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] border border-white/10"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>

                <AnimatePresence>
                  {link.mega && megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] glass rounded-xl2 p-5 shadow-card grid grid-cols-2 gap-1"
                    >
                      {coreServices.slice(0, 8).map((s) => (
                        <Link
                          key={s.title}
                          to="/services"
                          className="flex items-start gap-2 px-3 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors group"
                        >
                          <span className="text-sm text-ink group-hover:text-accent-400 transition-colors">
                            {s.title}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" icon={ArrowUpRight} className="!px-6 !py-2.5 !text-xs">
              Get a Quote
            </Button>
          </div>

          <button
            className="lg:hidden text-ink p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-surface/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between container-px pt-6">
              <span className="font-display font-semibold text-ink">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-ink" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <motion.nav className="flex flex-col gap-2 container-px mt-10">
              {[...navLinks, { label: 'Contact', to: '/contact' }].map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  <NavLink
                    to={link.to}
                    className="block py-4 text-3xl font-display font-semibold text-ink border-b border-white/10"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
