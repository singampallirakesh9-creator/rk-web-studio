import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import ContactForm from '../ui/ContactForm.jsx';
import Reveal from '../ui/Reveal.jsx';

const info = [
  { icon: Phone, label: 'Call', value: '+91 91822 85902', href: 'tel:+919182285902' },
  { icon: Mail, label: 'Email', value: 'rakeshsingampalli770@gmail.com', href: 'mailto:rakeshsingampalli770@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India', href: '#' },
  { icon: Clock, label: 'Business Hours', value: 'Every day, 9:00 AM – 9:00 PM', href: '#' },
];

export default function ContactSection() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Let's Talk"
          title="Tell us about your business"
          description="Fill in the form and Rakesh will personally get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <Reveal dir="left" className="space-y-5">
            {info.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 card-surface p-5 hover:border-primary-500/40 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-400 shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-ink-faint">{item.label}</p>
                  <p className="text-sm font-medium text-ink">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="rounded-xl2 overflow-hidden border border-white/10 h-56">
              <iframe
                title="RK Web Studio location"
                src="https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed"
                className="w-full h-full grayscale contrast-125 opacity-80"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal dir="right">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
