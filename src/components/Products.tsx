import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Product = {
  name: string;
  description: string;
  image: string;
  specs: string[];
};

const products: Product[] = [
  {
    name: 'Compression Springs',
    description:
      'Helical coil springs that resist compressive forces. Available in a wide range of wire diameters, outer diameters, and materials including carbon steel, stainless steel, and specialty alloys.',
    image: '/compression-spring-2_-_Edited.jpg',
    specs: ['Custom coil counts', 'Variable pitch', 'Multiple end types', 'Full material range'],
  },
  {
    name: 'Extension Springs',
    description:
      'Tightly coiled springs designed to absorb and store energy by resisting pulling apart. Available with a variety of hook end configurations for reliable attachment in assemblies.',
    image: '/Tension-Springs-28.webp',
    specs: ['Hook end options', 'Initial tension control', 'Custom body lengths', 'Loop varieties'],
  },
  {
    name: 'Torsion Springs',
    description:
      'Springs that exert a torque or rotary force along their axis. Ideal for applications requiring rotational force such as door hinges, automotive mechanisms, and industrial equipment.',
    image: '/Torsion_Springs.png',
    specs: ['Single & double torsion', 'Custom leg forms', 'Right/left wind', 'Precision torque'],
  },
  {
    name: 'Barrel Springs',
    description:
      'Convex (barrel) shaped springs with reduced solid height and lateral stability. Commonly used in applications where conventional cylindrical springs may buckle.',
    image: '/Barrel_Spring.png',
    specs: [
      'Reduced solid height',
      'Anti-buckling design',
      'Variable pitch profile',
      'Custom contours',
    ],
  },
  {
    name: 'Wire Forms',
    description:
      'Custom-bent wire components formed into precise shapes for clips, brackets, retaining rings, and complex 3D configurations. Produced from a broad range of wire diameters and alloys.',
    image: '/Wire_Forms.png',
    specs: ['2D and 3D forms', 'Clips & brackets', 'Retaining rings', 'Complex geometries'],
  },
  {
    name: 'Custom Engineering',
    description:
      'Engineering consultation services to design springs from scratch based on load requirements, space constraints, and operating environments. From prototype to full production runs.',
    image: '/Custom_Engineering.png',
    specs: ['CAD design support', 'Prototype runs', 'Stress analysis', 'Material selection'],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#6B7FA3]" />
            <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
              Our Product Line
            </span>
            <div className="h-px w-10 bg-[#6B7FA3]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-4">
            Custom Springs & Wire Forms
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg leading-relaxed">
            Every spring we manufacture is made to your exact specifications. No off-the-shelf
            compromises — only precision-engineered components built for your application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group border border-gray-200 hover:border-[#1B3A6B] transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold drop-shadow-sm">
                  {product.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">{product.description}</p>
                <ul className="space-y-1 mb-5">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <div className="w-1.5 h-1.5 bg-[#6B7FA3] rounded-full flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-1.5 text-[#1B3A6B] text-sm font-semibold hover:gap-2.5 transition-all duration-200 uppercase tracking-wide"
                >
                  Request Quote <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
