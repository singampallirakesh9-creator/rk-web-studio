import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';

const categories = [
  { name: 'Restaurants', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80', span: 'row-span-2' },
  { name: 'Salons & Spas', image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80', span: '' },
  { name: 'Gyms & Fitness', image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600&q=80', span: '' },
  { name: 'Dental & Clinics', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', span: '' },
  { name: 'Real Estate', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', span: 'row-span-2' },
  { name: 'Interior Design', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', span: '' },
  { name: 'Construction', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80', span: '' },
];

export default function BusinessCategories() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Every Industry"
          title="Built for your business category"
          description="Each industry has its own visual language — we design with that in mind."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-5">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06} className={c.span}>
              <div className={`relative rounded-xl2 overflow-hidden group h-full ${c.span}`}>
                <img
                  src={c.image}
                  alt={`${c.name} business website design`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary-900/70 transition-colors duration-500" />
                <span className="absolute bottom-4 left-4 font-display font-semibold text-ink text-lg">
                  {c.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
