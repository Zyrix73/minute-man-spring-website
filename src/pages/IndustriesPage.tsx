import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Industries from '../components/Industries';

export default function IndustriesPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-16 lg:pt-[105px]">
      <div className="bg-[#1B3A6B] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Markets Served
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Industries We Serve
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Minuteman Spring's custom springs and wire forms are trusted in some of the world's most demanding applications — from flight-critical aerospace components to precision surgical devices.
          </p>
        </div>
      </div>

      <Industries />

      <div className="bg-[#F8F6F1] border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Ready to Source?
          </p>
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] mb-4">
            Get a Same-Day Quote
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto leading-relaxed">
            Tell us your application, material, and quantity requirements. Our engineering team will respond the same business day.
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
