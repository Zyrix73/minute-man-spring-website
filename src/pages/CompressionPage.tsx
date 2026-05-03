import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const materials = [
  { name: 'Music Wire', description: 'Highest tensile strength for general purpose applications. Excellent fatigue resistance.' },
  { name: 'Hard Drawn Wire', description: 'Cost-effective carbon steel for low-stress, static load applications.' },
  { name: 'Stainless Steel (302/304)', description: 'Corrosion resistant. Ideal for food, medical, and outdoor environments.' },
  { name: 'Stainless Steel (316)', description: 'Superior corrosion resistance for marine and chemical environments.' },
  { name: 'Stainless Steel (17-7 PH)', description: 'High strength stainless for elevated temperature applications up to 600°F.' },
  { name: 'Chrome Silicon', description: 'High stress, high temperature applications. Excellent fatigue life.' },
  { name: 'Chrome Vanadium', description: 'Shock and impact resistance. Used in heavy-duty industrial applications.' },
  { name: 'Phosphor Bronze', description: 'Non-magnetic, corrosion resistant. Ideal for electrical and marine use.' },
  { name: 'Beryllium Copper', description: 'Highest strength copper alloy. Excellent conductivity and corrosion resistance.' },
];

const specs = [
  { label: 'Wire Diameter Range', value: '.008" – .312"' },
  { label: 'End Types', value: 'Open, Closed, Ground, Squared' },
  { label: 'Wind Direction', value: 'Left or Right Hand' },
  { label: 'Coil Types', value: 'Cylindrical, Conical, Barrel, Variable Pitch' },
  { label: 'Lead Time', value: 'Most orders ship within 10 business days' },
  { label: 'Quoting', value: 'Same-day quotes available' },
  { label: 'Run Size', value: 'Prototype (10 pcs) to high-volume production' },
  { label: 'Industries', value: 'Aerospace, Medical, Automotive, Industrial, Electronics' },
];

const faqs = [
  {
    q: 'What is a compression spring?',
    a: 'A compression spring is an open-coil helical spring that resists compressive forces — it pushes back when compressed. Compression springs are the most common spring type, used in virtually every industry from automotive and aerospace to medical devices and consumer electronics.',
  },
  {
    q: 'What wire diameters are available for custom compression springs?',
    a: 'Minuteman Spring manufactures custom compression springs in wire diameters from .008" to .312", in carbon steel, stainless steel, and specialty alloys including chrome silicon, chrome vanadium, phosphor bronze, and beryllium copper.',
  },
  {
    q: 'What end types are available for compression springs?',
    a: 'We manufacture compression springs with open ends, closed ends, squared ends, and ground ends. End type affects how the spring seats and transfers load — our engineering team will help select the correct end type for your application.',
  },
  {
    q: 'How do I specify a custom compression spring?',
    a: 'To quote a custom compression spring, provide: wire diameter, outer diameter (OD) or inner diameter (ID), free length, number of active coils or solid height, load requirements at a specified length, material, and end type. A drawing or sketch is helpful but not required — our team can work from a sample or verbal description.',
  },
  {
    q: 'How fast can Minuteman Spring manufacture custom compression springs?',
    a: 'We provide same-day quotes on all custom compression spring orders. Most production orders ship within 10 business days from Millbury, Massachusetts. Rush turnaround is available — contact us to discuss your timeline.',
  },
];

export default function CompressionSpringsPage() {
  return (
    <main className="pt-[109px]">

      {/* Hero */}
      <section className="bg-[#1B3A6B] py-20" aria-labelledby="page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-blue-300 text-xs mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">Compression Springs</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#6B7FA3]" aria-hidden="true" />
              <span className="text-[#6B7FA3] text-sm font-semibold uppercase tracking-widest">
                Custom Spring Manufacturing
              </span>
            </div>
            <h1
              id="page-heading"
              className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6"
            >
              Custom Compression
              <br />
              <span style={{ color: '#6B7FA3' }}>Springs Manufacturer</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Minuteman Spring Company manufactures precision custom compression springs to your
              exact specifications — wire diameters from .008" to .312", full material range, same-day
              quoting. Serving manufacturers in New England and worldwide from Millbury, Massachusetts
              since 1946.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1B3A6B] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-200 group"
              >
                Request a Free Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </Link>
              <a
                href="tel:+15082996100"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#6B7FA3] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#6B7FA3]/20 transition-all duration-200"
              >
                Call 508-299-6100
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left: Content */}
            <div className="lg:col-span-2">
              <h2 id="about-heading" className="text-3xl font-black text-[#1B3A6B] mb-6">
                Precision Custom Compression Springs — Made to Your Specifications
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-5 text-lg">
                Compression springs are open-coil helical springs designed to resist compressive
                forces. When compressed, they store mechanical energy and push back to their free
                length — making them the most widely used spring type across virtually every
                industry.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-5">
                At Minuteman Spring Company, every compression spring is manufactured to order.
                We do not sell stock springs. Each spring is engineered and produced to your exact
                wire diameter, outer diameter, free length, load requirements, end type, and
                material specification — from prototype quantities to full production runs.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-5">
                Our compression spring capabilities include cylindrical, conical, barrel, and
                variable-pitch designs. End types include open, closed, squared, and ground — each
                affecting how the spring seats and transfers load in your assembly. Our engineering
                team works with you to select the optimal configuration for your application,
                operating environment, and budget.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-10">
                Founded in 1946 and located in Millbury, Massachusetts, we serve aerospace and
                defense, medical and life sciences, automotive, industrial equipment, and
                electronics manufacturers throughout New England, the United States, and worldwide.
              </p>

              {/* Specs table */}
              <h2 className="text-2xl font-black text-[#1B3A6B] mb-6">
                Compression Spring Specifications & Capabilities
              </h2>
              <div className="border border-gray-200 overflow-hidden mb-12">
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`grid grid-cols-2 gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <dt className="text-[#1B3A6B] font-semibold text-sm">{spec.label}</dt>
                    <dd className="text-[#4A4A4A] text-sm">{spec.value}</dd>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h2 className="text-2xl font-black text-[#1B3A6B] mb-6">
                Compression Spring FAQ
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q} itemScope itemType="https://schema.org/Question">
                    <h3
                      className="text-[#1B3A6B] font-bold text-base mb-2"
                      itemProp="name"
                    >
                      {faq.q}
                    </h3>
                    <div itemScope itemType="https://schema.org/Answer">
                      <p className="text-[#4A4A4A] text-sm leading-relaxed" itemProp="text">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-1">

              {/* Quick quote CTA */}
              <div className="bg-[#1B3A6B] p-8 mb-8 sticky top-28">
                <h3 className="text-white font-black text-xl mb-3">
                  Get a Same-Day Quote
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-6">
                  Submit your compression spring specifications and our engineering team responds
                  the same business day.
                </p>
                <Link
                  to="/quote"
                  className="block w-full text-center bg-white text-[#1B3A6B] px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors duration-200 mb-4"
                >
                  Request Free Quote
                </Link>
                <a
                  href="tel:+15082996100"
                  className="block w-full text-center border border-[#6B7FA3] text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#6B7FA3]/20 transition-colors duration-200"
                >
                  Call 508-299-6100
                </a>
                <address className="not-italic mt-6 pt-6 border-t border-blue-800">
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Minuteman Spring Company, Inc.<br />
                    34 Howe Ave, Millbury, MA 01527<br />
                    Mon–Fri: 8:00 AM – 5:00 PM ET
                  </p>
                </address>
              </div>

              {/* Related products */}
              <div className="border border-gray-200 p-6">
                <h3 className="text-[#1B3A6B] font-black text-sm uppercase tracking-widest mb-4">
                  Related Products
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Extension Springs', href: '/extension-springs' },
                    { label: 'Torsion Springs', href: '/torsion-springs' },
                    { label: 'Barrel Springs', href: '/barrel-springs' },
                    { label: 'Wire Forms', href: '/wire-forms' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="flex items-center gap-2 text-[#4A4A4A] text-sm hover:text-[#1B3A6B] transition-colors group"
                      >
                        <ArrowRight size={13} className="text-[#6B7FA3] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-gray-50" aria-labelledby="materials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="materials-heading" className="text-3xl font-black text-[#1B3A6B] mb-4">
              Compression Spring Materials
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
              We manufacture custom compression springs in a full range of materials. Our
              engineering team will help you select the optimal alloy for your load requirements,
              operating temperature, corrosion environment, and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((mat) => (
              <div key={mat.name} className="bg-white border border-gray-200 p-6 hover:border-[#6B7FA3] transition-colors duration-200">
                <div className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#6B7FA3] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-[#1B3A6B] font-bold text-sm mb-1">{mat.name}</h3>
                    <p className="text-[#4A4A4A] text-xs leading-relaxed">{mat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#1B3A6B]" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl font-black text-white mb-4">
            Ready to Order Custom Compression Springs?
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed mb-8">
            Get a same-day quote from Minuteman Spring Company — precision custom compression spring
            manufacturer since 1946. Serving New England and worldwide from Millbury, Massachusetts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B3A6B] px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-200 group"
            >
              Request a Free Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href="tel:+15082996100"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-200"
            >
              Call 508-299-6100
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
