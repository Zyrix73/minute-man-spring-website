const industries = [
  {
    name: 'Aerospace & Defense',
    description: 'Precision springs for flight-critical and defense applications with strict material traceability.',
    alt: 'Custom precision springs for aerospace and defense applications',
    image: 'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Medical & Life Sciences',
    description: 'Biocompatible wire forms and springs for surgical devices, diagnostic equipment, and implantables.',
    alt: 'Biocompatible custom springs for medical devices and life sciences',
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Automotive & Transportation',
    description: 'High-cycle springs engineered to withstand demanding automotive operating environments.',
    alt: 'High-cycle custom springs for automotive and transportation industry',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Industrial Equipment',
    description: 'Heavy-duty compression and torsion springs for machinery, presses, and industrial automation.',
    alt: 'Heavy-duty compression and torsion springs for industrial equipment and machinery',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Electronics & Technology',
    description: 'Small-diameter precision springs for switches, connectors, and electronic assemblies.',
    alt: 'Small-diameter precision springs for electronics and technology applications',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Energy & Power',
    description: 'Springs for valves, actuators, and control systems in power generation and energy infrastructure.',
    alt: 'Custom springs for energy and power generation valves and actuators',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#6B7FA3]" />
            <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
              Markets Served
            </span>
            <div className="h-px w-10 bg-[#6B7FA3]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-4">
            Industries We Serve
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg leading-relaxed">
            Minuteman Spring's custom compression springs, extension springs, torsion springs, and
            wire forms are trusted across demanding industries that require precision, reliability,
            and consistent quality from their spring manufacturer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative overflow-hidden h-56 cursor-pointer"
            >
              <img
                src={industry.image}
                alt={industry.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B] via-[#1B3A6B]/50 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white font-bold text-lg mb-1">{industry.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
