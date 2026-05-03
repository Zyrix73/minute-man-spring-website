import { Phone, MapPin, Mail, ArrowRight, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const productLinks = [
  { label: 'Compression Springs', href: '/compression-springs' },
  { label: 'Extension Springs', href: '/extension-springs' },
  { label: 'Torsion Springs', href: '/torsion-springs' },
  { label: 'Barrel Springs', href: '/barrel-springs' },
  { label: 'Wire Forms', href: '/wire-forms' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Industries Served', href: '/industries' },
  { label: 'Spring Insights', href: '/insights' },
  { label: 'Spring Calculators', href: '/calculators' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer
      id="contact"
      className="bg-[#0f2347]"
      aria-label="Minuteman Spring Company footer — contact and navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-[#6B7FA3]/20">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex flex-col mb-6"
              aria-label="Minuteman Spring Company — Home"
            >
              <span className="text-2xl font-black text-white tracking-tight">MINUTEMAN</span>
              <span className="text-xl font-black tracking-widest" style={{ color: '#6B7FA3' }}>
                SPRING
              </span>
              <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase">
                Company, Incorporated
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Precision custom spring manufacturer since 1946. Compression springs, extension
              springs, torsion springs, barrel springs, and wire forms — all made to your exact
              specifications.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              Serving manufacturers across New England and worldwide from Millbury, Massachusetts.
            </p>
            <button
              onClick={() => navigate('/quote')}
              className="inline-flex items-center gap-2 text-[#6B7FA3] text-sm font-semibold hover:text-white transition-colors uppercase tracking-wide"
              aria-label="Request a free custom spring quote"
            >
              Get a Free Same-Day Quote <ArrowRight size={14} />
            </button>
          </div>

          {/* Products column */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Custom Spring Products
            </h3>
            <nav aria-label="Product pages">
              <ul className="space-y-3">
                {productLinks.map((product) => (
                  <li key={product.label}>
                    <Link
                      to={product.href}
                      className="text-gray-400 text-sm hover:text-[#6B7FA3] transition-colors duration-200"
                    >
                      {product.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/products"
                    className="text-[#6B7FA3] text-sm font-semibold hover:text-white transition-colors duration-200"
                  >
                    View All Products →
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Company
            </h3>
            <nav aria-label="Company pages">
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-[#6B7FA3] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => navigate('/quote')}
                    className="text-gray-400 text-sm hover:text-[#6B7FA3] transition-colors duration-200"
                    aria-label="Request a custom spring quote"
                  >
                    Request a Quote
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact column — uses <address> for schema-friendly markup */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Contact Us
            </h3>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="text-[#6B7FA3] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    34 Howe Ave
                    <br />
                    Millbury, MA 01527
                    <br />
                    USA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="text-[#6B7FA3] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    Mon – Fri: 8:00 AM – 5:00 PM
                    <br />
                    <span className="text-[#6B7FA3] font-semibold">Same-day quoting available</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    size={16}
                    className="text-[#6B7FA3] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <a
                      href="tel:+15082996100"
                      className="text-gray-400 text-sm hover:text-[#6B7FA3] transition-colors block"
                      aria-label="Call Minuteman Spring main line"
                    >
                      508-299-6100
                    </a>
                    <a
                      href="tel:+15082996101"
                      className="text-gray-400 text-sm hover:text-[#6B7FA3] transition-colors block"
                      aria-label="Call Minuteman Spring fax line"
                    >
                      508-299-6101 (Fax)
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail
                    size={16}
                    className="text-[#6B7FA3] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:sales@minutemansprings.com"
                    className="text-gray-400 text-sm hover:text-[#6B7FA3] transition-colors"
                    aria-label="Email Minuteman Spring sales team"
                  >
                    sales@minutemansprings.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-[#6B7FA3]/10 py-6 grid grid-cols-3 items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Minuteman Spring Company, Inc. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-600 text-xs">Website by</span>
            <a
              href="https://www.getzyrix.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website by Zyrix"
            >
              <img
                src="/Zyrix-footer-logo.png"
                alt="Zyrix"
                className="h-6 w-auto opacity-40 hover:opacity-70 transition-opacity duration-200"
              />
            </a>
          </div>
          <p className="text-gray-500 text-xs text-right">
            34 Howe Ave, Millbury, MA 01527
          </p>
        </div>
      </div>
    </footer>
  );
}
