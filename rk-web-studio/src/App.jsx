import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import LoadingScreen from './components/ui/LoadingScreen.jsx';
import ScrollToTop from './components/ui/ScrollToTop.jsx';
import WhatsAppButton from './components/ui/WhatsAppButton.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Pricing = lazy(() => import('./pages/Pricing.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-primary-500/30 border-t-primary-500 animate-spin" />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setInitialLoad(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{initialLoad && <LoadingScreen />}</AnimatePresence>

      <div className="relative min-h-screen bg-surface bg-noise selection:bg-primary-500">
        <Navbar />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={<PageFallback />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.main>
        </AnimatePresence>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
