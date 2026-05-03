import { Link } from 'react-router-dom';
import QuoteForm from '../components/QuoteForm';

export default function QuotePage() {
  return (
    <main className="pt-16 lg:pt-[105px]">

      {/* Hero */}
      <section className="bg-[#1B3A6B] py-12 lg:py-16" aria-labelledby="quote-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-blue-300 text-xs mb-6"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">Request a Quote</span>
          </nav>

          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Same-Day Response
          </p>
          <h1
            id="quote-page-heading"
            className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Request a Free Custom Spring Quote
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Tell us about your project. Our engineering team at Minuteman Spring Company will
            respond with a competitive quote — often the same business day. All spring types,
            all materials, prototype to full production.
          </p>
        </div>
      </section>

      <QuoteForm />
    </main>
  );
}
