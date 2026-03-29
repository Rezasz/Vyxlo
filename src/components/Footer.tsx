import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Logo className="text-gold" size={8} />
              <span className="ml-2 text-xl font-bold">Vyxlo.com</span>
            </Link>
            <p className="text-charcoal-border">
              Your Digital Nexus
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-charcoal-border hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-charcoal-border hover:text-gold transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-charcoal-border hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-charcoal-border">
                <Mail className="h-5 w-5 mr-2 text-gold" />
                contact@vyxlo.com
              </li>
              <li className="flex items-center text-charcoal-border">
                <Phone className="h-5 w-5 mr-2 text-gold" />
                +971-42327866
              </li>
              <li className="flex items-center text-charcoal-border">
                <MapPin className="h-5 w-5 mr-2 text-gold" />
                702-Opal Tower-Business Bay-Dubai-UAE
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/kanz-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-border hover:text-gold transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-charcoal text-center text-charcoal-border">
          <p>&copy; {new Date().getFullYear()} Vyxlo.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
