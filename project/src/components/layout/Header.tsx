import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Heart className="text-primary-500 mr-2" size={24} />
          <span className="font-serif text-2xl font-semibold text-neutral-900">WishingTree</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm uppercase tracking-wide transition-colors hover:text-primary-600 ${
                isActive ? 'text-primary-600 font-medium' : isScrolled ? 'text-neutral-900' : 'text-white'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm uppercase tracking-wide transition-colors hover:text-primary-600 ${
                isActive ? 'text-primary-600 font-medium' : isScrolled ? 'text-neutral-900' : 'text-white'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-sm uppercase tracking-wide transition-colors hover:text-primary-600 ${
                isActive ? 'text-primary-600 font-medium' : isScrolled ? 'text-neutral-900' : 'text-white'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `text-sm uppercase tracking-wide transition-colors hover:text-primary-600 ${
                isActive ? 'text-primary-600 font-medium' : isScrolled ? 'text-neutral-900' : 'text-white'
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              `text-sm uppercase tracking-wide transition-colors hover:text-primary-600 ${
                isActive ? 'text-primary-600 font-medium' : isScrolled ? 'text-neutral-900' : 'text-white'
              }`
            }
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-sm uppercase tracking-wide transition-colors hover:text-primary-600 ${
                isActive ? 'text-primary-600 font-medium' : isScrolled ? 'text-neutral-900' : 'text-white'
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="btn btn-primary text-sm px-5 py-2"
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-900 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-neutral-900" />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-neutral-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <nav className="container-custom py-4 flex flex-col space-y-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-2 px-4 rounded-md ${isActive ? 'bg-primary-100 text-primary-600' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `py-2 px-4 rounded-md ${isActive ? 'bg-primary-100 text-primary-600' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `py-2 px-4 rounded-md ${isActive ? 'bg-primary-100 text-primary-600' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `py-2 px-4 rounded-md ${isActive ? 'bg-primary-100 text-primary-600' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  `py-2 px-4 rounded-md ${isActive ? 'bg-primary-100 text-primary-600' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `py-2 px-4 rounded-md ${isActive ? 'bg-primary-100 text-primary-600' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="btn btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;