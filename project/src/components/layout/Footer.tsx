import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Heart className="text-primary-500 mr-2" size={24} />
              <span className="font-serif text-2xl font-semibold">WishingTree</span>
            </Link>
            <p className="text-neutral-600 mb-4">
              Creating magical moments for your special day. Premier wedding and event planning services.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Event Decoration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Day-of Coordination
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Venue Selection
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Vendor Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Corporate Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-primary-500 mt-1 mr-2" />
                <span className="text-neutral-600">hello@wishingtree.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-primary-500 mt-1 mr-2" />
                <span className="text-neutral-600">+1 (555) 123-4567</span>
              </li>
              <li>
                <Link to="/contact" className="btn btn-outline text-sm px-4 py-2 mt-2">
                  Send us a message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-200 text-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} WishingTree. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;