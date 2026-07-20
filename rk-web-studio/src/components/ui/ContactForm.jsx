import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const businessTypes = [
  'Restaurant', 'Salon / Spa', 'Gym / Fitness', 'Clinic / Dental',
  'Real Estate', 'School / College', 'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      `Hi Rakesh, I'd like a website for my business.`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.business && `Business type: ${form.business}`,
      `Details: ${form.message}`,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/919182285902?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-xl3 p-12 text-center"
      >
        <CheckCircle2 className="w-14 h-14 text-accent-400 mx-auto mb-5" />
        <h3 className="font-display font-bold text-2xl text-ink mb-2">Almost there!</h3>
        <p className="text-ink-muted">
          Thanks {form.name.split(' ')[0] || 'there'} — we opened WhatsApp with your details filled in.
          Just hit send and Rakesh will reply within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-xl3 p-8 md:p-10 space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Your Name">
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Anjali Reddy"
            className="field"
          />
        </Field>
        <Field label="Email Address">
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@business.com"
            className="field"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Phone Number">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 91822 85902"
            className="field"
          />
        </Field>
        <Field label="Business Type">
          <select name="business" value={form.business} onChange={handleChange} className="field">
            <option value="">Select one</option>
            {businessTypes.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about your project">
        <textarea
          required
          rows={5}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="I run a salon in Hyderabad and need a booking-friendly website..."
          className="field resize-none"
        />
      </Field>

      <button type="submit" className="btn-primary w-full !rounded-2xl">
        Send Message
        <Send className="w-4 h-4" />
      </button>

      <style>{`
        .field {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.85rem;
          padding: 0.85rem 1rem;
          color: #FAFAFA;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .field:focus { border-color: #06B6D4; }
        .field::placeholder { color: #71717A; }
      `}</style>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-ink-muted mb-2 block">{label}</span>
      {children}
    </label>
  );
}
