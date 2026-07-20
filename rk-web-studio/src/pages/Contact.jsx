import SEO from '../components/ui/SEO.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import ContactSection from '../components/home/ContactSection.jsx';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with RK Web Studio for a free quote on your next website project."
        path="/contact"
      />

      <section className="pt-40 pb-10 relative">
        <div className="absolute inset-0 bg-grid-glow opacity-60" />
        <div className="container-px mx-auto max-w-4xl text-center relative">
          <Reveal>
            <span className="eyebrow mb-5 justify-center">
              <span className="w-6 h-px bg-accent-400" />
              Get In Touch
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] text-ink">
              Let's build something <span className="text-gradient">great together.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg text-ink-muted max-w-xl mx-auto">
              Tell us about your business and Rakesh will reach out with next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
