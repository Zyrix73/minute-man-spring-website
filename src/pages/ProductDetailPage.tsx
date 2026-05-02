import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetailProps = {
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  image: string;
  imageAlt: string;
  specs: ProductSpec[];
  applications: string[];
  materials: string[];
  relatedProducts: { name: string; href: string; image: string }[];
};

export default function ProductDetailPage({
  name,
  tagline,
  description,
  longDescription,
  image,
  imageAlt,
  specs,
  applications,
  materials,
  relatedProducts,
}: ProductDetailProps) {
  const navigate = useNavigate();

  return (
    <div className="pt-16 lg:pt-[105px]">
      {/* Hero */}
      <div className="bg-[#1B3A6B] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 text-blue-300 hover:text-white text-sm font-medium transition-colors mb-6"
          >
            <ArrowLeft size={15} /> All Products
          </button>
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Custom Spring Manufacturing
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            {name}
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">{tagline}</p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="overflow-hidden rounded-sm border border-gray-200 shadow-md">
                <img src={image} alt={imageAlt} className="w-full h-72 lg:h-96 object-cover" />
              </div>

              {/* Specs table */}
              {specs.length > 0 && (
                <div className="mt-8 border border-gray-200 overflow-hidden">
                  <div className="bg-[#1B3A6B] px-5 py-3">
                    <h3 className="text-white text-xs font-bold uppercase tracking-widest">Typical Specifications</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {specs.map((spec) => (
                      <div key={spec.label} className="flex px-5 py-3 text-sm">
                        <span className="font-semibold text-[#1B3A6B] w-40 flex-shrink-0">{spec.label}</span>
                        <span className="text-[#4A4A4A]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6">{description}</p>
              {longDescription.map((para, i) => (
                <p key={i} className="text-[#4A4A4A] leading-relaxed mb-5">
                  {para}
                </p>
              ))}

              {/* Materials */}
              <div className="mt-8">
                <h3 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-wide mb-4">
                  Available Materials
                </h3>
                <div className="flex flex-wrap gap-2">
                  {materials.map((mat) => (
                    <span
                      key={mat}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-[#4A4A4A] text-xs font-medium"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mt-8">
                <h3 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-wide mb-4">
                  Common Applications
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {applications.map((app) => (
                    <li key={app} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <div className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/quote')}
                  className="inline-flex items-center justify-center gap-2 bg-[#1B3A6B] text-white px-7 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200"
                >
                  Request a Quote <ArrowRight size={15} />
                </button>
                <a
                  href="tel:+15082996100"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#1B3A6B] text-[#1B3A6B] px-7 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-[#1B3A6B] hover:text-white transition-colors duration-200"
                >
                  Call 508-299-6100
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-[#1B3A6B] mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <button
                  key={p.href}
                  onClick={() => navigate(p.href)}
                  className="group text-left border border-gray-200 hover:border-[#1B3A6B] hover:shadow-md transition-all duration-300 overflow-hidden bg-white"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#1B3A6B] group-hover:text-[#C8A96E] transition-colors">
                      {p.name}
                    </span>
                    <ArrowRight size={14} className="text-[#6B7FA3] group-hover:text-[#C8A96E] transition-colors flex-shrink-0" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
