import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Calculators', href: '#calculators' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center group">
            <img
              src="/Minuteman_Spring_Co_Inc_Logo-Original-With-Address.jpg"
              alt="Minuteman Spring Company, Inc."
              className="h-12 lg:h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#4A4A4A] hover:text-[#1B3A6B] text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+15082996100"
              className="flex items-center gap-2 text-[#4A4A4A] hover:text-[#1B3A6B] text-sm transition-colors duration-200"
            >
              <Phone size={15} />
              <span className="font-medium">508-299-6100</span>
            </a>
            <a
              href="#quote"
              className="bg-[#1B3A6B] text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200"
            >
              Request Quote
            </a>
          </div>

          <button
            className="lg:hidden text-[#1B3A6B] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-[#4A4A4A] hover:text-[#1B3A6B] text-sm font-medium uppercase tracking-wide border-b border-gray-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#quote"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-[#1B3A6B] text-white px-5 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200"
              >
                Request a Quote
              </a>
            </div>
            <a
              href="tel:+15082996100"
              className="flex items-center justify-center gap-2 text-[#4A4A4A] py-2 text-sm"
            >
              <Phone size={14} />
              508-299-6100
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
