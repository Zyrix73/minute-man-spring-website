import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const productLinks = [
  { label: 'Compression Springs', href: '/compression-springs' },
  { label: 'Extension Springs', href: '/extension-springs' },
  { label: 'Torsion Springs', href: '/torsion-springs' },
  { label: 'Barrel Springs', href: '/barrel-springs' },
  { label: 'Wire Forms', href: '/wire-forms' },
];

const primaryLinks = [
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
];

const resourceLinks = [
  { label: 'Calculators', href: '/#calculators' },
  { label: 'Insights', href: '/insights' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const close = () => setProductsOpen(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  const handleQuoteClick = () => {
    navigate('/quote');
    setMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 uppercase rounded hover:bg-gray-50 ${
      isActive ? 'text-[#1B3A6B]' : 'text-[#4A4A4A] hover:text-[#1B3A6B]'
    }`;

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
            <Link to="/about" className="text-blue-100 hover:text-white transition-colors duration-150">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[68px]">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/Minuteman_Spring_Co_Inc_Logo-Original-With-Address.jpg"
                alt="Minuteman Spring Company, Inc."
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {/* Products dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setProductsOpen((o) => !o)}
                  className={`flex items-center gap-1 px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 uppercase rounded hover:bg-gray-50 ${
                    productsOpen ? 'text-[#1B3A6B] bg-gray-50' : 'text-[#4A4A4A] hover:text-[#1B3A6B]'
                  }`}
                >
                  Products
                  <ChevronDown size={13} className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 shadow-lg rounded-sm z-50 py-1">
                    <Link
                      to="/products"
                      onClick={() => setProductsOpen(false)}
                      className="block px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-[#6B7FA3] hover:bg-gray-50 border-b border-gray-100"
                    >
                      All Products
                    </Link>
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setProductsOpen(false)}
                        className="block px-4 py-2.5 text-sm text-[#4A4A4A] hover:text-[#1B3A6B] hover:bg-gray-50 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {primaryLinks.map((link) => (
                <NavLink key={link.href} to={link.href} className={navLinkClass}>
                  {link.label}
                </NavLink>
              ))}

              <span className="w-px h-4 bg-gray-200 mx-2" />

              {resourceLinks.map((link) =>
                link.href.startsWith('/#') ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-[#4A4A4A] hover:text-[#1B3A6B] text-[13px] font-semibold tracking-wide transition-colors duration-200 uppercase rounded hover:bg-gray-50"
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink key={link.href} to={link.href} className={navLinkClass}>
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <button
                onClick={handleQuoteClick}
                className="bg-[#C8A96E] text-[#1B1B1B] px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider hover:bg-[#b8965e] transition-colors duration-200"
              >
                Request Quote
              </button>
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
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="flex items-center py-3.5 text-[#4A4A4A] hover:text-[#1B3A6B] text-sm font-semibold uppercase tracking-wide border-b border-gray-100 transition-colors"
            >
              All Products
            </Link>
            {productLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center py-3 pl-4 text-[#4A4A4A] hover:text-[#1B3A6B] text-sm border-b border-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center py-3.5 text-[#4A4A4A] hover:text-[#1B3A6B] text-sm font-semibold uppercase tracking-wide border-b border-gray-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#calculators"
              onClick={() => setMenuOpen(false)}
              className="flex items-center py-3.5 text-[#4A4A4A] hover:text-[#1B3A6B] text-sm font-semibold uppercase tracking-wide border-b border-gray-100 transition-colors"
            >
              Calculators
            </a>
            <Link
              to="/insights"
              onClick={() => setMenuOpen(false)}
              className="flex items-center py-3.5 text-[#4A4A4A] hover:text-[#1B3A6B] text-sm font-semibold uppercase tracking-wide border-b border-gray-100 transition-colors"
            >
              Insights
            </Link>
            <div className="py-4 space-y-3">
              <button
                onClick={handleQuoteClick}
                className="block w-full text-center bg-[#1B3A6B] text-white px-5 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#152d56] transition-colors duration-200"
              >
                Request a Quote
              </button>
              <div className="flex items-center justify-center gap-4 pt-1">
                <a href="tel:+15082996100" className="flex items-center gap-1.5 text-[#4A4A4A] text-sm">
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
