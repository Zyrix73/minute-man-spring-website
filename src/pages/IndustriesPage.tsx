import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Industries from '../components/Industries';

export default function IndustriesPage() {
  return (
    <main className="pt-16 lg:pt-[105px]">

      {/* Hero */}
      <section className="bg-[#1B3A6B] py-12 lg:py-16" aria-labelledby="industries-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-blue-300 text-xs mb-6"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">Industries</span>
          </nav>

          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Markets Served
          </p>
          <h1
            id="industries-page-heading"
            className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Industries Served by
            <br />Minuteman Spring Company
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Our custom compression springs, extension springs, torsion springs, barrel springs, and
            wire forms are trusted in some of the world's most demanding applications — from
            flight-critical aerospace components to precision surgical devices — manufactured in
            Millbury, Massachusetts since 1946.
          </p>
        </div>
      </section>

      <Industries />

      {/* Bottom CTA */}
      <section className="bg-[#F8F6F1] border-t border-gray-200 py-16" aria-labelledby="industries-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Ready to Source?
          </p>
          <h2
            id="industries-cta-heading"
            className="text-3xl font-extrabold text-[#1B3A6B] mb-4"
          >
            Get a Same-Day Custom Spring Quote
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto leading-relaxed">
            Tell us your industry, application, material, and quantity requirements. Our engineering
            team at Minuteman Spring will respond the same business day with a competitive quote.
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
