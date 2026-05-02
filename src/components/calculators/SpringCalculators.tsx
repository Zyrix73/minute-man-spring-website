import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CompressionCalculator from './CompressionCalculator';
import ExtensionCalculator from './ExtensionCalculator';
import TorsionCalculator from './TorsionCalculator';
import { DisclaimerNote } from './ResultBadge';

type Tab = 'compression' | 'extension' | 'torsion';

const tabs: { id: Tab; label: string; short: string; description: string }[] = [
  {
    id: 'compression',
    label: 'Compression Springs',
    short: 'Compression',
    description:
      'Calculate spring rate, solid height, max load, and stress for helical compression springs.',
  },
  {
    id: 'extension',
    label: 'Extension Springs',
    short: 'Extension',
    description:
      'Calculate spring rate, extension at load, and torsional stress for helical extension springs.',
  },
  {
    id: 'torsion',
    label: 'Torsion Springs',
    short: 'Torsion',
    description:
      'Calculate torque, spring rate, bending stress, and wound dimensions for torsion springs.',
  },
];

export default function SpringCalculators() {
  const [activeTab, setActiveTab] = useState<Tab>('compression');

  const activeTabData = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="calculators" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 items-end">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#6B7FA3]" />
              <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
                Engineering Tools
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-4">
              Spring Calculators
            </h2>
            <p className="text-[#4A4A4A] text-lg leading-relaxed">
              Use our free spring engineering calculators to estimate spring rate, load, stress, and
              geometry for your application. Results update in real time as you adjust parameters.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-sm text-[#4A4A4A] mb-3">
              Need a production-ready quote based on your results?
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#1B3A6B]/90 transition-colors duration-200 group"
            >
              Request a Quote
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-0 border-b-2 border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-200 border-b-2 -mb-0.5 ${
                activeTab === tab.id
                  ? 'border-[#1B3A6B] text-[#1B3A6B] bg-[#1B3A6B]/5'
                  : 'border-transparent text-gray-500 hover:text-[#1B3A6B] hover:bg-gray-50'
              }`}
            >
              <Calculator size={15} className={activeTab === tab.id ? 'text-[#1B3A6B]' : 'text-gray-400'} />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.short}</span>
            </button>
          ))}
        </div>

        <div className="bg-white border border-gray-200 p-6 lg:p-8 shadow-sm">
          <div className="flex items-start gap-3 mb-8 pb-6 border-b border-gray-100">
            <div className="w-8 h-8 bg-[#1B3A6B] flex items-center justify-center flex-shrink-0">
              <Calculator size={16} className="text-white" />
            </div>
            <div>
              <h3 className="text-[#1B3A6B] font-black text-lg">{activeTabData.label}</h3>
              <p className="text-[#4A4A4A] text-sm mt-1">{activeTabData.description}</p>
            </div>
          </div>

          {activeTab === 'compression' && <CompressionCalculator />}
          {activeTab === 'extension' && <ExtensionCalculator />}
          {activeTab === 'torsion' && <TorsionCalculator />}

          <DisclaimerNote />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                document.getElementById('calculators')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-5 border-2 text-left transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-[#1B3A6B] bg-[#1B3A6B]/5'
                  : 'border-gray-200 hover:border-[#6B7FA3] hover:bg-gray-50'
              }`}
            >
              <div
                className={`text-sm font-bold uppercase tracking-wide mb-1 ${
                  activeTab === tab.id ? 'text-[#1B3A6B]' : 'text-[#4A4A4A]'
                }`}
              >
                {tab.label}
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">{tab.description}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
