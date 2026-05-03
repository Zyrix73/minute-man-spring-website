import { ShieldCheck, Clock, Wrench, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    description:
      'Every custom spring is manufactured to your exact specifications with rigorous in-process and final inspection. No off-the-shelf substitutes — only precision-engineered components built to perform.',
  },
  {
    icon: Clock,
    title: 'Same-Day Quoting',
    description:
      'Fast response is critical in manufacturing. Submit your spring specifications and our engineering team responds with a detailed quote the same business day — keeping your project on schedule.',
  },
  {
    icon: Wrench,
    title: 'Extensive Tooling Library',
    description:
      'Nearly 80 years of continuous operation have built an expansive proprietary tooling library. This means faster lead times, more flexibility, and more competitive pricing on every order.',
  },
  {
    icon: Users,
    title: 'Engineering Partnership',
    description:
      'Our experienced team works alongside yours — from initial spring design consultation through full production. We bring deep metallurgical expertise and CNC coiling precision to every project.',
  },
  {
    icon: Globe,
    title: 'Worldwide Service',
    description:
      'Rooted in Millbury, Massachusetts and serving all of New England, we also supply custom springs to manufacturers across the United States and internationally with consistent quality and delivery.',
  },
  {
    icon: Award,
    title: '79+ Years of Trust',
    description:
      'Since 1946, Minuteman Spring Company has built its reputation on exceptional delivery performance, uncompromising quality, and a superior customer experience that keeps manufacturers coming back.',
  },
];

export default function WhyUs() {
  return (
    <section
      id="capabilities"
      className="py-24 bg-gray-50"
      aria-labelledby="whyus-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Intro copy */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#6B7FA3]" aria-hidden="true" />
              <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
                Why Minuteman Spring
              </span>
            </div>

            <h2
              id="whyus-heading"
              className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-6 leading-tight"
            >
              New England's Trusted
              <br />
              <span className="text-[#6B7FA3]">Custom Spring Manufacturer</span>
              <br />
              Since 1946
            </h2>

            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6">
              When your application demands precision, reliability, and speed, Minuteman Spring
              delivers. We combine modern CNC coiling and wire forming technology with nearly 80
              years of hands-on metallurgical expertise — all from our manufacturing facility in
              Millbury, Massachusetts.
            </p>

            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              Whether you need a prototype run of 10 pieces or a production order in the thousands,
              we apply the same rigorous standards to every job. Our customers — from aerospace
              engineers to OEM procurement teams — return to us because we consistently deliver on
              time, on spec, and within budget.
            </p>

            <p className="text-[#4A4A4A] leading-relaxed mb-8">
              As a true jobber spring shop, we manufacture only to order. Every compression spring,
              extension spring, torsion spring, barrel spring, and wire form is custom-made for your
              application — never pulled from a shelf.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200 group"
                aria-label="Start your custom spring project with a free same-day quote"
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-[#1B3A6B] text-[#1B3A6B] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#1B3A6B] hover:text-white transition-colors duration-200"
                aria-label="Learn more about Minuteman Spring Company"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Right: Reasons grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            aria-label="Key reasons to choose Minuteman Spring Company"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.title}
                  className="bg-white p-6 border border-gray-200 hover:border-[#6B7FA3] hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#1B3A6B10' }}
                    aria-hidden="true"
                  >
                    <Icon size={20} style={{ color: '#1B3A6B' }} aria-hidden="true" />
                  </div>
                  <h3 className="text-[#1B3A6B] font-bold text-sm mb-2 uppercase tracking-wide">
                    {reason.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">{reason.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
