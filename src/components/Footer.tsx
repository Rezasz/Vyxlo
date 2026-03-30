import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Logo className="text-gold" size={9} />
              <div className="ml-3 flex items-baseline gap-1.5">
                <span className="text-xl font-bold tracking-tight">VyXlo</span>
                <span className="text-xs font-semibold text-charcoal-muted bg-charcoal border border-charcoal px-1.5 py-0.5 rounded uppercase tracking-wider">DMS</span>
              </div>
            </Link>
            <p className="text-charcoal-border text-sm leading-relaxed">
              Document management for teams who care about control.
            </p>
            <p className="text-charcoal-muted text-xs">A Kanz.ai product.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-border mb-4">Product</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Features', to: '/features' },
                { label: 'How It Works', to: '/how-it-works' },
                { label: 'Security', to: '/security' },
                { label: 'Technical Specs', to: '/technical-specs' },
                { label: 'Request Access', to: '/request-access' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-charcoal-border text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-border mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' },
                { label: 'Knowledge Base', to: '/knowledge-base' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-charcoal-border text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-border mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Use Cases', to: '/use-cases' },
                { label: 'Industry Verticals', to: '/verticals' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-charcoal-border text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-border mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@vyxlo.com" className="flex items-start text-charcoal-border text-sm hover:text-gold transition-colors">
                  <Mail className="h-4 w-4 mr-2 text-gold mt-0.5 flex-shrink-0" />
                  contact@vyxlo.com
                </a>
              </li>
              <li>
                <a href="tel:+97142327866" className="flex items-start text-charcoal-border text-sm hover:text-gold transition-colors">
                  <Phone className="h-4 w-4 mr-2 text-gold mt-0.5 flex-shrink-0" />
                  +971-42327866
                </a>
              </li>
              <li className="flex items-start text-charcoal-border text-sm">
                <MapPin className="h-4 w-4 mr-2 text-gold mt-0.5 flex-shrink-0" />
                702 Opal Tower, Business Bay, Dubai, UAE
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/kanz-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-charcoal-border text-sm hover:text-gold transition-colors"
                >
                  <Linkedin className="h-4 w-4 mr-2 text-gold" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-charcoal flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-charcoal-border text-sm">
            &copy; {new Date().getFullYear()} VyXlo DMS. A Kanz.ai product.
          </p>
          <p className="text-charcoal-muted text-xs">
            Built with FastAPI, React, and PostgreSQL.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
