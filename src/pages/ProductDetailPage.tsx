import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetailProps = {
  name: string;
  slug: string;
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
  slug,
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
    <main className="pt-16 lg:pt-[105px]">

      {/* Hero */}
      <section className="bg-[#1B3A6B] py-12 lg:py-16" aria-labelledby="product-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-blue-300 text-xs mb-6"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">{name}</span>
          </nav>

          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Custom Spring Manufacturing — Minuteman Spring Company
          </p>
          <h1
            id="product-heading"
            className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Custom {name} Manufacturer
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">{tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B3A6B] px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-200 group"
              aria-label={`Request a free quote for custom ${name}`}
            >
              Request a Free Quote
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href="tel:+15082996100"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#6B7FA3] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-[#6B7FA3]/20 transition-all duration-200"
              aria-label="Call Minuteman Spring Company"
            >
              Call 508-299-6100
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left: Image + Specs */}
            <div>
              <div className="overflow-hidden rounded-sm border border-gray-200 shadow-md">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-72 lg:h-96 object-cover"
                  loading="lazy"
                  width="600"
                  height="384"
                />
              </div>

              {specs.length > 0 && (
                <div className="mt-8 border border-gray-200 overflow-hidden">
                  <div className="bg-[#1B3A6B] px-5 py-3">
                    <h2
                      id="detail-heading"
                      className="text-white text-xs font-bold uppercase tracking-widest"
                    >
                      {name} Specifications & Capabilities
                    </h2>
                  </div>
                  <dl className="divide-y divide-gray-100">
                    {specs.map((spec) => (
                      <div key={spec.label} className="flex px-5 py-3 text-sm">
                        <dt className="font-semibold text-[#1B3A6B] w-40 flex-shrink-0">
                          {spec.label}
                        </dt>
                        <dd className="text-[#4A4A4A]">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6">{description}</p>
              {longDescription.map((para, i) => (
                <p key={i} className="text-[#4A4A4A] leading-relaxed mb-5">
                  {para}
                </p>
              ))}

              {/* Materials */}
              <div className="mt-8">
                <h2 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-wide mb-4">
                  Available Materials for Custom {name}
                </h2>
                <div className="flex flex-wrap gap-2" role="list" aria-label={`Materials available for ${name}`}>
                  {materials.map((mat) => (
                    <span
                      key={mat}
                      role="listitem"
                      className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-[#4A4A4A] text-xs font-medium"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mt-8">
                <h2 className="text-[#1B3A6B] font-bold text-sm uppercase tracking-wide mb-4">
                  Common Applications for {name}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {applications.map((app) => (
                    <li key={app} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <div className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full flex-shrink-0" aria-hidden="true" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              {/* NAP + CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#1B3A6B] text-white px-7 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200 group"
                  aria-label={`Request a quote for custom ${name} from Minuteman Spring`}
                >
                  Request a Quote
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <a
                  href="tel:+15082996100"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#1B3A6B] text-[#1B3A6B] px-7 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-[#1B3A6B] hover:text-white transition-colors duration-200"
                  aria-label="Call Minuteman Spring Company at 508-299-6100"
                >
                  Call 508-299-6100
                </a>
              </div>

              {/* Inline NAP for local SEO */}
              <address className="not-italic mt-6 pt-6 border-t border-gray-100 text-xs text-gray-400 leading-relaxed">
                Minuteman Spring Company, Inc. &mdash; 34 Howe Ave, Millbury, MA 01527<br />
                Custom {name} manufacturer since 1946. Same-day quoting. Ships within 10 business days.
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-200" aria-labelledby="related-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="related-heading"
              className="text-2xl font-extrabold text-[#1B3A6B] mb-8"
            >
              Related Custom Spring Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <Link
                  key={p.href}
                  to={p.href}
                  className="group text-left border border-gray-200 hover:border-[#1B3A6B] hover:shadow-md transition-all duration-300 overflow-hidden bg-white"
                  aria-label={`View custom ${p.name} from Minuteman Spring`}
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={p.image}
                      alt={`Custom ${p.name} manufactured by Minuteman Spring Company`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="300"
                      height="144"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#1B3A6B] group-hover:text-[#C8A96E] transition-colors">
                      {p.name}
                    </span>
                    <ArrowRight size={14} className="text-[#6B7FA3] group-hover:text-[#C8A96E] transition-colors flex-shrink-0" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
