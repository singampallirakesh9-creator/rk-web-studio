# RK Web Studio

Premium portfolio website for RK Web Studio — built by Rakesh. "Modern Websites That Grow Your Business."

## Stack
- React 19 + Vite
- Tailwind CSS (custom design tokens: primary #6366F1, accent #06B6D4, secondary #8B5CF6, surface #09090B)
- Framer Motion (page transitions, scroll reveals, hover/parallax micro-interactions)
- React Router v6 (Home, Services, Portfolio, About, Pricing, Contact, 404 — all lazy-loaded)
- Lucide Icons
- react-helmet-async (per-page SEO)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    layout/    Navbar, Footer
    ui/        Button, SEO, LoadingScreen, ScrollToTop, WhatsAppButton, Counter, Reveal, ContactForm, SectionHeading
    home/      Hero, TrustedBy, Stats, Services, FeaturedPortfolio, BusinessCategories,
               WhyChooseUs, Process, PremiumFeatures, Testimonials, Pricing, FAQ, CTA, ContactSection
  pages/       Home, Services, Portfolio, About, Pricing, Contact, NotFound
  data/        services.js, portfolio.js, testimonials.js, pricing.js, faq.js
public/
  robots.txt, sitemap.xml, favicon.svg
```

## Notes
- Images are real Unsplash photography (direct CDN URLs), no placeholders.
- Colors, fonts (Poppins/Inter), and copy follow the brief's premium dark theme.
- Respects `prefers-reduced-motion`; visible focus states throughout.
- Update `rkwebstudio.com` in `index.html`, `SEO.jsx`, `robots.txt`, and `sitemap.xml` once a real domain is live.
