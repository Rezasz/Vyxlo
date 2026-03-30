import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Security', path: '/security' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleTryFree = () => {
    window.open('https://91.107.255.176:8080/', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group hover:opacity-90 transition-opacity">
              <Logo size={9} className="text-gold" />
              <div className="ml-3 flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold text-charcoal tracking-tight">VyXlo</span>
                <span className="text-xs font-semibold text-charcoal-muted bg-charcoal-50 border border-charcoal-border px-1.5 py-0.5 rounded uppercase tracking-wider">DMS</span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-gold bg-gold-50'
                    : 'text-charcoal-muted hover:text-gold hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/request-access"
              className="ml-3 px-4 py-2 bg-charcoal text-white text-sm font-semibold rounded-md hover:bg-charcoal-900 transition-all duration-200 shadow-sm"
            >
              Request Early Access
            </Link>

            <button
              onClick={handleTryFree}
              className="ml-2 px-4 py-2 bg-gold text-charcoal-900 text-sm font-semibold rounded-md hover:bg-gold-dark transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow"
            >
              Try Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal-muted hover:text-gold hover:bg-gray-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        } absolute top-20 inset-x-0 bg-white border-b border-gray-200 shadow-lg`}
      >
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive(item.path)
                  ? 'text-gold bg-gold-50'
                  : 'text-charcoal-muted hover:text-gold hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/request-access"
            className="block w-full mt-2 px-4 py-2 bg-charcoal text-white text-sm font-semibold rounded-md hover:bg-charcoal-900 transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            Request Early Access
          </Link>
          <button
            onClick={() => { handleTryFree(); setIsOpen(false); }}
            className="w-full mt-1 px-4 py-2 bg-gold text-charcoal-900 text-sm font-semibold rounded-md hover:bg-gold-dark transition-colors"
          >
            Try Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
