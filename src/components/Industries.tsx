import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    name: 'Aerospace & Defense',
    description:
      'Precision custom springs for flight-critical and defense applications with strict material traceability and documentation. Compression springs, extension springs, and wire forms built to aerospace standards.',
    alt: 'Custom precision compression springs and wire forms for aerospace and defense applications — Minuteman Spring Company',
    image:
      'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Medical & Life Sciences',
    description:
      'Biocompatible custom wire forms and springs for surgical devices, diagnostic equipment, and implantables. Stainless steel and specialty alloy options available for medical-grade applications.',
    alt: 'Biocompatible custom springs and wire forms for medical devices and life sciences — Minuteman Spring Massachusetts',
    image:
      'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Automotive & Transportation',
    description:
      'High-cycle custom compression and torsion springs engineered to withstand demanding automotive operating environments, vibration, and temperature extremes.',
    alt: 'High-cycle custom compression and torsion springs for automotive and transportation industry — Minuteman Spring',
    image:
      'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Industrial Equipment',
    description:
      'Heavy-duty compression springs, torsion springs, and barrel springs for machinery, presses, and industrial automation. Custom-engineered for load, cycle, and dimensional requirements.',
    alt: 'Heavy-duty custom compression and torsion springs for industrial equipment and machinery — Minuteman Spring Company',
    image:
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Electronics & Technology',
    description:
      'Small-diameter precision springs and wire forms for switches, connectors, battery contacts, and electronic assemblies. Music wire and beryllium copper options available.',
    alt: 'Small-diameter precision springs and wire forms for electronics and technology applications — Minuteman Spring MA',
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Energy & Power',
    description:
      'Custom springs for valves, actuators, and control systems in power generation and energy infrastructure. Oil tempered and chrome silicon materials available for high-temperature environments.',
    alt: 'Custom springs for energy and power generation valves and actuators — Minuteman Spring Company Massachusetts',
    image:
      'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-24 bg-white"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#6B7FA3]" aria-hidden="true" />
            <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
              Markets Served
            </span>
            <div className="h-px w-10 bg-[#6B7FA3]" aria-hidden="true" />
          </div>
          <h2
            id="industries-heading"
            className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-4"
          >
            Industries Served by Minuteman Spring
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg leading-relaxed">
            Our custom compression springs, extension springs, torsion springs, barrel springs, and
            wire forms are trusted across demanding industries that require precision, reliability,
            and consistent quality from their spring manufacturer — from Millbury, Massachusetts to
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <article
              key={industry.name}
              className="group relative overflow-hidden h-56 cursor-pointer"
            >
              <img
                src={industry.image}
                alt={industry.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="600"
                height="224"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B] via-[#1B3A6B]/50 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white font-bold text-lg mb-1">{industry.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-24 overflow-hidden">
                  {industry.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-[#4A4A4A] text-lg mb-6 max-w-2xl mx-auto">
            Don't see your industry? We manufacture custom springs for virtually any application.{' '}
            <strong>Our engineering team will work with your specifications directly.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 border-2 border-[#1B3A6B] text-[#1B3A6B] px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#1B3A6B] hover:text-white transition-all duration-200 group"
              aria-label="View all industries served by Minuteman Spring Company"
            >
              View All Industries
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#152d56] transition-all duration-200 group"
              aria-label="Request a free custom spring quote for your industry"
            >
              Request a Free Quote
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
