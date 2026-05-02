import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import About from '../components/About';
import FAQ from '../components/FAQ';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-16 lg:pt-[105px]">
      <div className="bg-[#1B3A6B] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            About Minuteman Spring
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Precision and craftsmanship since 1946. Learn about our history, capabilities, and the team behind New England's trusted custom spring manufacturer.
          </p>
        </div>
      </div>

      <About />
      <FAQ />

      <div className="bg-[#F8F6F1] border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Work With Us
          </p>
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] mb-4">
            Start Your Project Today
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto leading-relaxed">
            From prototype to full production, our engineering team is ready to help. Submit your requirements and receive a quote the same business day.
          </p>
          <button
            onClick={() => navigate('/quote')}
            className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white px-8 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200"
          >
            Request a Quote <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
