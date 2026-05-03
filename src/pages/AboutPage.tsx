import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import About from '../components/About';
import FAQ from '../components/FAQ';

export default function AboutPage() {
  return (
    <main className="pt-16 lg:pt-[105px]">

      {/* Hero */}
      <section className="bg-[#1B3A6B] py-12 lg:py-16" aria-labelledby="about-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-blue-300 text-xs mb-6"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">About</span>
          </nav>

          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1
            id="about-page-heading"
            className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            About Minuteman Spring Company
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Precision custom spring manufacturing since 1946. Learn about our history, capabilities,
            and the team behind New England's trusted custom spring manufacturer — based in
            Millbury, Massachusetts.
          </p>
        </div>
      </section>

      <About />
      <FAQ />

      {/* Bottom CTA */}
      <section className="bg-[#F8F6F1] border-t border-gray-200 py-16" aria-labelledby="about-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Work With Us
          </p>
          <h2
            id="about-cta-heading"
            className="text-3xl font-extrabold text-[#1B3A6B] mb-4"
          >
            Start Your Custom Spring Project Today
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto leading-relaxed">
            From prototype to full production, our engineering team is ready to help. Submit your
            spring requirements and receive a same-day quote from Minuteman Spring Company.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white px-8 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200 group"
            aria-label="Request a free custom spring quote from Minuteman Spring Company"
          >
            Request a Free Quote
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
