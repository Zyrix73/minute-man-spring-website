import { Link } from 'react-router-dom';
import SpringCalculators from '../components/calculators/SpringCalculators';

export default function CalculatorsPage() {
  return (
    <main className="pt-16 lg:pt-[105px]">

      {/* Hero */}
      <section className="bg-[#1B3A6B] py-12 lg:py-16" aria-labelledby="calculators-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-blue-300 text-xs mb-6"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">Spring Calculators</span>
          </nav>

          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Free Engineering Tools
          </p>
          <h1
            id="calculators-heading"
            className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Free Spring Rate &amp; Load Calculators
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Free engineering calculators for compression springs, extension springs, and torsion
            springs. Estimate spring rate, load, stress, and geometry in real time — then request
            a same-day quote from Minuteman Spring Company.
          </p>
        </div>
      </section>

      <SpringCalculators />
    </main>
  );
}
