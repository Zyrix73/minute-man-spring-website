import { Phone, MapPin, Mail, ArrowRight, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const productLinks = [
  { label: 'Compression Springs', href: '/compression-springs' },
  { label: 'Extension Springs', href: '/extension-springs' },
  { label: 'Torsion Springs', href: '/torsion-springs' },
  { label: 'Barrel Springs', href: '/barrel-springs' },
  { label: 'Wire Forms', href: '/wire-forms' },
];

const CAREERS_URL = 'https://forms.gle/N9mi9fCUvQaj3iCz8';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

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
            <button
              onClick={() => navigate('/quote')}
              className="inline-flex items-center gap-2 text-[#6B7FA3] text-sm font-semibold hover:text-white transition-colors uppercase tracking-wide"
            >
              Get a Free Quote <ArrowRight size={14} />
            </button>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Our Products
            </h4>
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
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Company
            </h4>
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
                >
                  Request a Quote
                </button>
              </li>
              <li className="pt-1">
                <a
                  href={CAREERS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#C8A96E] text-sm font-semibold hover:text-amber-300 transition-colors duration-200"
                >
                  <Users size={13} />
                  Join Our Team
                </a>
              </li>
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

        <div className="border-t border-[#6B7FA3]/20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C8A96E]/10 flex-shrink-0">
              <Users size={15} className="text-[#C8A96E]" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-tight">We're hiring skilled spring makers</p>
              <p className="text-gray-500 text-xs mt-0.5">Join a team with 75+ years of manufacturing excellence in Millbury, MA</p>
            </div>
          </div>
          <a
            href={CAREERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-[#C8A96E] text-[#C8A96E] px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#C8A96E] hover:text-[#1B1B1B] transition-all duration-200"
          >
            Apply Now <ArrowRight size={12} />
          </a>
        </div>

        <div className="border-t border-[#6B7FA3]/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
