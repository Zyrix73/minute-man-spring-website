import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Product = {
  name: string;
  slug: string;
  description: string;
  image: string;
  alt: string;
  specs: string[];
};

const products: Product[] = [
  {
    name: 'Compression Springs',
    slug: 'compression-springs',
    description:
      'Helical coil springs that resist compressive forces. Available in a wide range of wire diameters, outer diameters, and materials including carbon steel, stainless steel, and specialty alloys.',
    image: '/compression-spring-2_-_Edited.jpg',
    alt: 'Custom precision compression springs manufactured by Minuteman Spring Company, Millbury MA',
    specs: ['Custom coil counts', 'Variable pitch', 'Multiple end types', 'Full material range'],
  },
  {
    name: 'Extension Springs',
    slug: 'extension-springs',
    description:
      'Tightly coiled springs designed to absorb and store energy by resisting pulling apart. Available with a variety of hook end configurations for reliable attachment in assemblies.',
    image: '/Tension-Springs-28.webp',
    alt: 'Custom extension springs with hook ends manufactured to specification — Minuteman Spring Company',
    specs: ['Hook end options', 'Initial tension control', 'Custom body lengths', 'Loop varieties'],
  },
  {
    name: 'Torsion Springs',
    slug: 'torsion-springs',
    description:
      'Springs that exert a torque or rotary force along their axis. Ideal for applications requiring rotational force such as door hinges, automotive mechanisms, and industrial equipment.',
    image: '/Torsion_Springs.png',
    alt: 'Precision custom torsion springs for industrial and automotive applications — Minuteman Spring',
    specs: ['Single & double torsion', 'Custom leg forms', 'Right/left wind', 'Precision torque'],
  },
  {
    name: 'Barrel Springs',
    slug: 'barrel-springs',
    description:
      'Convex (barrel) shaped springs with reduced solid height and lateral stability. Commonly used in applications where conventional cylindrical springs may buckle.',
    image: '/Barrel_Spring.png',
    alt: 'Custom barrel springs with anti-buckling convex design manufactured by Minuteman Spring, Massachusetts',
    specs: [
      'Reduced solid height',
      'Anti-buckling design',
      'Variable pitch profile',
      'Custom contours',
    ],
  },
  {
    name: 'Wire Forms',
    slug: 'wire-forms',
    description:
      'Custom-bent wire components formed into precise shapes for clips, brackets, retaining rings, and complex 3D configurations. Produced from a broad range of wire diameters and alloys.',
    image: '/Wire_Forms.png',
    alt: 'Custom wire forms including clips, brackets and retaining rings — Minuteman Spring Company Massachusetts',
    specs: ['2D and 3D forms', 'Clips & brackets', 'Retaining rings', 'Complex geometries'],
  },
  {
    name: 'Custom Engineering',
    slug: 'quote',
    description:
      'Engineering consultation services to design springs from scratch based on load requirements, space constraints, and operating environments. From prototype to full production runs.',
    image: '/Custom_Engineering.png',
    alt: 'Custom spring engineering design and consultation services — Minuteman Spring Company since 1946',
    specs: ['CAD design support', 'Prototype runs', 'Stress analysis', 'Material selection'],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#6B7FA3]" />
            <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
              Our Product Line
            </span>
            <div className="h-px w-10 bg-[#6B7FA3]" />
          </div>
          <h2
            id="products-heading"
            className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-4"
          >
            Precision Custom Springs &amp; Wire Forms
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg leading-relaxed">
            Every spring we manufacture is made to your exact specifications. No off-the-shelf
            compromises — only precision-engineered components built for your application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="group border border-gray-200 hover:border-[#1B3A6B] transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="192"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold drop-shadow-sm">
                  {product.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-1 mb-5" aria-label={`${product.name} capabilities`}>
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <div className="w-1.5 h-1.5 bg-[#6B7FA3] rounded-full flex-shrink-0" aria-hidden="true" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  {product.slug !== 'quote' && (
                    <Link
                      to={`/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-[#1B3A6B] text-sm font-semibold hover:gap-2.5 transition-all duration-200 uppercase tracking-wide"
                      aria-label={`Learn more about our custom ${product.name}`}
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  )}
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-1.5 text-[#6B7FA3] text-sm font-semibold hover:gap-2.5 transition-all duration-200 uppercase tracking-wide"
                    aria-label={`Request a quote for custom ${product.name}`}
                  >
                    {product.slug === 'quote' ? (
                      <>Request Quote <ArrowRight size={14} /></>
                    ) : (
                      <>Get Quote <ArrowRight size={14} /></>
                    )}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center border-t border-gray-100 pt-12">
          <p className="text-[#4A4A4A] text-lg mb-6">
            Don't see exactly what you need? We manufacture{' '}
            <strong>any custom spring configuration</strong> — contact our engineering team.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#6B7FA3] transition-all duration-200 group"
          >
            Request a Free Same-Day Quote
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
