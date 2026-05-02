import SpringCalculators from '../components/calculators/SpringCalculators';

export default function CalculatorsPage() {
  return (
    <div className="pt-16 lg:pt-[105px]">
      <div className="bg-[#1B3A6B] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8A96E] text-sm font-semibold uppercase tracking-widest mb-3">
            Engineering Tools
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Spring Calculators
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Free engineering calculators for compression, extension, and torsion springs. Estimate spring rate, load, stress, and geometry in real time.
          </p>
        </div>
      </div>
      <SpringCalculators />
    </div>
  );
}
