import QuoteForm from '../components/QuoteForm';

export default function QuotePage() {
  return (
    <div className="pt-16 lg:pt-[105px]">
      <div className="bg-[#1B3A6B] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Get Started
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Request a Free Quote
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Tell us about your project. Our engineering team will respond with a competitive quote — often the same business day.
          </p>
        </div>
      </div>
      <QuoteForm />
    </div>
  );
}
