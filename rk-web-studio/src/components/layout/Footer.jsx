import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Facebook, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const footerLinks = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Contact', to: '/contact' },
  ],
  Services: [
    { label: 'Business Websites', to: '/services' },
    { label: 'Restaurant Websites', to: '/services' },
    { label: 'Gym Websites', to: '/services' },
    { label: 'Clinic Websites', to: '/services' },
  ],
  Resources: [
    { label: 'Case Studies', to: '/portfolio' },
    { label: 'FAQ', to: '/pricing' },
    { label: 'Get a Quote', to: '/contact' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="relative border-t border-white/10 mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-glow opacity-40 pointer-events-none" />

      <div className="container-px mx-auto max-w-7xl relative">
        <div className="py-20 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-mesh-primary flex items-center justify-center font-display font-bold text-sm text-white">
                RK
              </div>
              <span className="font-display font-semibold text-ink">Web Studio</span>
            </Link>
            <p className="text-ink-muted max-w-sm leading-relaxed">
              Modern websites that grow your business. Designed and built by Rakesh for
              restaurants, salons, gyms, clinics and ambitious local brands.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 max-w-sm">
              <p className="text-sm font-medium text-ink mb-3">Get design tips & offers</p>
              <div className="flex items-center gap-2 glass rounded-full p-1.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-ink placeholder:text-ink-faint outline-none min-w-0"
                />
                <button
                  type="submit"
                  className="w-9 h-9 shrink-0 rounded-full bg-mesh-primary flex items-center justify-center text-white hover:shadow-glow transition-shadow"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {submitted && (
                <p className="text-xs text-accent-400 mt-2">Thanks — you're subscribed.</p>
              )}
            </form>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-semibold text-ink mb-5">{heading}</h4>
              <ul className="space-y-3.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-ink-muted hover:text-accent-400 transition-colors text-sm">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-muted">
            <a href="mailto:rakeshsingampalli770@gmail.com" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
              <Mail className="w-4 h-4 text-accent-400" /> rakeshsingampalli770@gmail.com
            </a>
            <a href="tel:+919182285902" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
              <Phone className="w-4 h-4 text-accent-400" /> +91 91822 85902
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-400" /> Hyderabad, India
            </span>
          </div>
          <div className="flex items-center gap-3">
            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-ink-muted hover:text-ink hover:border-white/25 transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="pb-8 text-center text-xs text-ink-faint">
          © {new Date().getFullYear()} RK Web Studio. Built by Rakesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
