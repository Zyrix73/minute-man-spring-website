import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const primaryLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
];

const resourceLinks = [
  { label: 'Calculators', href: '#calculators' },
];

export default function Header({
  onInsightsClick,
  onLogoClick,
}: {
  onInsightsClick?: () => void;
  onLogoClick?: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allLinks = [...primaryLinks, ...resourceLinks];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block bg-[#1B3A6B] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <span className="text-blue-200 font-medium tracking-wide">
            Precision Custom Spring Manufacturing Since 1946 — Millbury, Massachusetts
          </span>
          <div className="flex items-center gap-5">
            <a
              href="tel:+15082996100"
              className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors duration-150"
            >
              <Phone size={11} />
              508-299-6100
            </a>
            <a
              href="mailto:sales@minutemansprings.com"
              className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors duration-150"
            >
              <Mail size={11} />
              sales@minutemansprings.com
            </a>
            <a
              href="#contact"
              onClick={onLogoClick}
              className="text-blue-100 hover:text-white transition-colors duration-150"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[68px]">
            {/* Logo */}
            <a href="#" onClick={onLogoClick} className="flex items-center flex-shrink-0">
              <img
                src="/Minuteman_Spring_Co_Inc_Logo-Original-With-Address.jpg"
                alt="Minuteman Spring Company, Inc."
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onLogoClick}
                  className="px-4 py-2 text-[#4A4A4A] hover:text-[#1B3A6B] text-[13px] font-semibold tracking-wide transition-colors duration-200 uppercase rounded hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ))}

              {/* Divider */}
              <span className="w-px h-4 bg-gray-200 mx-2" />

              {resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onLogoClick}
                  className="px-4 py-2 text-[#4A4A4A] hover:text-[#1B3A6B] text-[13px] font-semibold tracking-wide transition-colors duration-200 uppercase rounded hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onInsightsClick}
                className="px-4 py-2 text-[#4A4A4A] hover:text-[#1B3A6B] text-[13px] font-semibold tracking-wide transition-colors duration-200 uppercase rounded hover:bg-gray-50"
              >
                Insights
              </button>
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#quote"
                onClick={(e) => {
                  e.preventDefault();
                  onLogoClick?.();
                  setTimeout(() => {
                    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="inline-flex items-center bg-[#C8A96E] text-[#1B1B1B] px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider rounded hover:bg-[#b8965e] transition-colors duration-200 whitespace-nowrap"
              >
                Request Quote
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden text-[#1B3A6B] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2">
            {allLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { setMenuOpen(false); onLogoClick?.(); }}
                className="flex items-center py-3.5 text-[#4A4A4A] hover:text-[#1B3A6B] text-sm font-semibold uppercase tracking-wide border-b border-gray-100 last:border-0 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onInsightsClick?.(); }}
              className="flex items-center w-full py-3.5 text-[#4A4A4A] hover:text-[#1B3A6B] text-sm font-semibold uppercase tracking-wide border-b border-gray-100 transition-colors duration-150"
            >
              Insights
            </button>
            <div className="py-4 space-y-3">
              <a
                href="#quote"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-[#1B3A6B] text-white px-5 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200"
              >
                Request a Quote
              </a>
              <div className="flex items-center justify-center gap-4 pt-1">
                <a
                  href="tel:+15082996100"
                  className="flex items-center gap-1.5 text-[#4A4A4A] text-sm"
                >
                  <Phone size={13} />
                  508-299-6100
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
