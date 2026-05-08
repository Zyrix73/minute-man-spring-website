import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Compression Springs',
    description: 'Helical coil springs that resist compressive forces. Available in a wide range of wire diameters, outer diameters, and materials including carbon steel, stainless steel, and specialty alloys.',
    image: '/compression-spring-2_-_Edited.jpg',
    alt: 'Custom precision compression springs manufactured by Minuteman Spring Company, Millbury MA',
    specs: ['Custom coil counts', 'Variable pitch', 'Multiple end types', 'Full material range'],
    href: '/compression-springs',
  },
  {
    name: 'Extension Springs',
    description: 'Tightly coiled springs designed to absorb and store energy by resisting pulling apart. Available with a variety of hook end configurations for reliable attachment in assemblies.',
    image: '/Tension-Springs-28.webp',
    alt: 'Custom extension tension springs with hook ends manufactured by Minuteman Spring Company',
    specs: ['Hook end options', 'Initial tension control', 'Custom body lengths', 'Loop varieties'],
    href: '/extension-springs',
  },
  {
    name: 'Torsion Springs',
    description: 'Springs that exert a torque or rotary force along their axis. Ideal for applications requiring rotational force such as door hinges, automotive mechanisms, and industrial equipment.',
    image: '/Torsion_Springs.png',
    alt: 'Custom precision torsion springs for industrial and automotive applications — Minuteman Spring',
    specs: ['Single & double torsion', 'Custom leg forms', 'Right/left wind', 'Precision torque'],
    href: '/torsion-springs',
  },
  {
    name: 'Barrel Springs',
    description: 'Convex (barrel) shaped springs with reduced solid height and lateral stability. Commonly used in applications where conventional cylindrical springs may buckle.',
    image: '/Barrel_Spring.png',
    alt: 'Custom barrel springs with anti-buckling convex design — Minuteman Spring Company Massachusetts',
    specs: ['Reduced solid height', 'Anti-buckling design', 'Variable pitch profile', 'Custom contours'],
    href: '/barrel-springs',
  },
  {
    name: 'Wire Forms',
    description: 'Custom-bent wire components formed into precise shapes for clips, brackets, retaining rings, and complex 3D configurations. Produced from a broad range of wire diameters and alloys.',
    image: '/Wire_Forms.png',
    alt: 'Custom wire forms including clips, brackets and retaining rings — Minuteman Spring Company MA',
    specs: ['2D and 3D forms', 'Clips & brackets', 'Retaining rings', 'Complex geometries'],
    href: '/wire-forms',
  },
  {
    name: 'Custom Engineering',
    description: 'Engineering consultation services to design springs from scratch based on load requirements, space constraints, and operating environments. From prototype to full production runs.',
    image: '/Custom_Engineering.png',
    alt: 'Custom spring engineering design and consultation — Minuteman Spring Company since 1946',
    specs: ['CAD design support', 'Prototype runs', 'Stress analysis', 'Material selection'],
    href: '/quote',
  },
];

export default function ProductsPage() {
  return (
    <main className="pt-16 lg:pt-[105px]">

      {/* Hero */}
      <section className="bg-[#1B3A6B] py-12 lg:py-16" aria-labelledby="products-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-blue-300 text-xs mb-6"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">Products</span>
          </nav>

          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Product Line
          </p>
          <h1
            id="products-page-heading"
            className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Precision Custom Springs &amp; Wire Forms
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Every spring we manufacture is made to your exact specifications — no off-the-shelf
            compromises. Compression springs, extension springs, torsion springs, barrel springs,
            and wire forms, all precision-engineered from Millbury, Massachusetts since 1946.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="products-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="products-grid-heading" className="sr-only">All custom spring products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.name}
                className="group border border-gray-200 hover:border-[#1B3A6B] transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <Link
                  to={product.href}
                  className="block"
                  aria-label={`View custom ${product.name} from Minuteman Spring Company`}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/60 to-transparent" aria-hidden="true" />
                    <h2 className="absolute bottom-4 left-4 text-white text-lg font-bold drop-shadow-sm">
                      {product.name}
                    </h2>
                  </div>
                  <div className="p-6">
                    <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">{product.description}</p>
                    <ul className="space-y-1 mb-5" aria-label={`${product.name} capabilities`}>
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                          <div className="w-1.5 h-1.5 bg-[#6B7FA3] rounded-full flex-shrink-0" aria-hidden="true" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-[#1B3A6B] text-sm font-semibold group-hover:gap-2.5 transition-all duration-200 uppercase tracking-wide">
  Explore {p.name} <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F8F6F1] border-t border-gray-200 py-16" aria-labelledby="products-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Same-Day Quoting
          </p>
          <h2
            id="products-cta-heading"
            className="text-3xl font-extrabold text-[#1B3A6B] mb-4"
          >
            Ready to Request a Custom Spring Quote?
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto leading-relaxed">
            Our engineering team reviews every inquiry and responds with a competitive quote —
            typically the same business day. All spring types, all materials, any quantity.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white px-8 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200 group"
            aria-label="Request a free same-day custom spring quote"
          >
            Request a Free Quote
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
