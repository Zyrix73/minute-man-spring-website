import { ShieldCheck, Clock, Wrench, Users, Globe, Award } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    description:
      'Every spring is manufactured to exact specifications with rigorous in-process and final inspection. Our commitment to quality is non-negotiable.',
  },
  {
    icon: Clock,
    title: 'Same-Day Quoting',
    description:
      "Fast response is critical in manufacturing. We provide same-day quotes so you can keep your project on schedule without waiting days for a number.",
  },
  {
    icon: Wrench,
    title: 'Extensive Tooling',
    description:
      'Decades of operation have allowed us to build an expansive tooling library. This means faster lead times and more competitive pricing for your orders.',
  },
  {
    icon: Users,
    title: 'Engineering Partnership',
    description:
      'Our team works alongside yours — from initial design consultation through production. We bring metallurgical expertise to every project.',
  },
  {
    icon: Globe,
    title: 'Worldwide Service',
    description:
      'While rooted in Massachusetts and New England, we serve customers across the United States and internationally with consistent quality and delivery.',
  },
  {
    icon: Award,
    title: '75+ Years of Trust',
    description:
      'Since 1946, Minuteman Spring has built its reputation on exceptional delivery performance, quality, and an overall superior customer experience.',
  },
];

export default function WhyUs() {
  return (
    <section id="capabilities" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#6B7FA3]" />
              <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
                Why Minuteman Spring
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-6 leading-tight">
              The Best Jobber Shop for
              <br />
              Custom Spring Manufacturing
            </h2>
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6">
              When your application demands precision, reliability, and speed, Minuteman Spring
              delivers. We combine modern manufacturing technology with decades of hands-on
              expertise in wire forming and metallurgical engineering.
            </p>
            <p className="text-[#4A4A4A] leading-relaxed mb-8">
              Whether you need a prototype run of 10 pieces or a production order in the thousands,
              we apply the same rigorous standards to every job. Our customers return to us because
              we consistently deliver on time, on spec, and within budget.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#1B3A6B]/90 transition-colors duration-200"
            >
              Start Your Project
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-white p-6 border border-gray-200 hover:border-[#6B7FA3] hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#1B3A6B10' }}
                  >
                    <Icon size={20} style={{ color: '#1B3A6B' }} />
                  </div>
                  <h3 className="text-[#1B3A6B] font-bold text-sm mb-2 uppercase tracking-wide">
                    {reason.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
