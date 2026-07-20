import SEO from '../components/ui/SEO.jsx';
import Hero from '../components/home/Hero.jsx';
import TrustedBy from '../components/home/TrustedBy.jsx';
import Stats from '../components/home/Stats.jsx';
import Services from '../components/home/Services.jsx';
import FeaturedPortfolio from '../components/home/FeaturedPortfolio.jsx';
import BusinessCategories from '../components/home/BusinessCategories.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import Process from '../components/home/Process.jsx';
import PremiumFeatures from '../components/home/PremiumFeatures.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import Pricing from '../components/home/Pricing.jsx';
import FAQ from '../components/home/FAQ.jsx';
import CTA from '../components/home/CTA.jsx';
import ContactSection from '../components/home/ContactSection.jsx';

export default function Home() {
  return (
    <>
      <SEO
        title="Modern Websites That Grow Your Business"
        description="RK Web Studio designs and builds premium, high-converting websites for restaurants, salons, gyms, clinics and growing businesses. Built by Rakesh."
        path="/"
      />
      <Hero />
      <TrustedBy />
      <Stats />
      <Services />
      <FeaturedPortfolio />
      <BusinessCategories />
      <WhyChooseUs />
      <Process />
      <PremiumFeatures />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <ContactSection />
    </>
  );
}
