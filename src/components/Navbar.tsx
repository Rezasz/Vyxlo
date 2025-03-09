import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
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
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Verticals', path: '/verticals' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleTryFree = () => {
    window.open('https://91.107.255.176:8080/', '_blank');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white border-b border-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center group hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 relative">
                <Logo size={8} className="text-primary-600" />
              </div>
              <span className="ml-3 text-2xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Vyxlo.com
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-600 bg-primary-50/80'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <button 
              onClick={handleTryFree}
              className="ml-4 px-5 py-2 bg-accent-500 text-white text-sm font-semibold rounded-md hover:bg-accent-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow"
            >
              Try Free
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        } absolute top-20 inset-x-0 bg-white border-b border-neutral-100 shadow-lg`}
      >
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive(item.path)
                  ? 'text-primary-600 bg-primary-50/80'
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => {
              handleTryFree();
              setIsOpen(false);
            }}
            className="w-full mt-2 px-4 py-2 bg-accent-500 text-white text-sm font-semibold rounded-md hover:bg-accent-600 transition-colors"
          >
            Try Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;