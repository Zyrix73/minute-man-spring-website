import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Spring_Design.jpeg)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(27,58,107,0.93) 0%, rgba(27,58,107,0.80) 50%, rgba(27,58,107,0.70) 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#6B7FA3]" />
            <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
              Est. 1946 &mdash; Millbury, Massachusetts
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Precision Custom
            <br />
            <span style={{ color: '#6B7FA3' }}>Spring Manufacturing</span>
            <br />
            For Industry
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 max-w-2xl">
            America's trusted custom spring manufacturer since 1946. We produce compression springs,
            extension springs, torsion springs, barrel springs, and wire forms — engineered to exact
            specifications with same-day quoting. Serving manufacturers across New England and
            worldwide from Millbury, Massachusetts.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 mb-10" aria-label="Key capabilities">
            <li>&#10003; Compression &amp; Extension Springs</li>
            <li>&#10003; Torsion &amp; Barrel Springs</li>
            <li>&#10003; Wire Forms &amp; Custom Assemblies</li>
            <li>&#10003; Same-Day Quoting</li>
            <li>&#10003; Carbon, Stainless &amp; Specialty Alloys</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B3A6B] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-200 group"
            >
              Request a Free Quote
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#6B7FA3] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#6B7FA3]/20 transition-all duration-200"
            >
              View Our Products
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <div className="text-3xl font-black text-white">75+</div>
              <div className="text-gray-400 text-xs uppercase tracking-wide mt-1">
                Years in Business
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">Same</div>
              <div className="text-gray-400 text-xs uppercase tracking-wide mt-1">Day Quoting</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">Global</div>
              <div className="text-gray-400 text-xs uppercase tracking-wide mt-1">
                Customer Reach
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
