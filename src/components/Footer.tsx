import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

const productLinks = [
  'Compression Springs',
  'Extension Springs',
  'Torsion Springs',
  'Double Torsion Springs',
  'Barrel Springs',
  'Wire Forms',
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Request a Quote', href: '#quote' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0f2347]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-[#6B7FA3]/20">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-black text-white tracking-tight">MINUTEMAN</span>
              <span className="text-xl font-black tracking-widest" style={{ color: '#6B7FA3' }}>
                SPRING
              </span>
              <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase">
                Company, Incorporated
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Precision custom spring manufacturing since 1946. Serving manufacturers in New England
              and worldwide with quality, speed, and expertise.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 text-[#6B7FA3] text-sm font-semibold hover:text-white transition-colors uppercase tracking-wide"
            >
              Get a Free Quote <ArrowRight size={14} />
            </a>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Our Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-gray-400 text-sm hover:text-[#6B7FA3] transition-colors duration-200"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#6B7FA3] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#6B7FA3] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  34 Howe Ave
                  <br />
                  Millbury, MA 01527
                  <br />
                  USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#6B7FA3] flex-shrink-0" />
                <div>
                  <a
                    href="tel:+15082996100"
                    className="text-gray-400 text-sm hover:text-[#6B7FA3] transition-colors block"
                  >
                    508-299-6100
                  </a>
                  <a
                    href="tel:+15082996101"
                    className="text-gray-400 text-sm hover:text-[#6B7FA3] transition-colors block"
                  >
                    508-299-6101
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#6B7FA3] flex-shrink-0" />
                <a
                  href="mailto:sales@minutemansprings.com"
                  className="text-gray-400 text-sm hover:text-[#6B7FA3] transition-colors"
                >
                  sales@minutemansprings.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Minuteman Spring Company, Inc. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Precision Spring Design and Manufacturing for Industries Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
