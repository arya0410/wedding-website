import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch to start planning your perfect event"
        backgroundImage="https://images.pexels.com/photos/265129/pexels-photo-265129.jpeg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="font-serif text-2xl mb-6">Contact Information</h3>
                
                <ul className="space-y-6">
                  <li className="flex">
                    <MapPin size={20} className="text-primary-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Our Location</h4>
                      <p className="text-neutral-600">123 Wedding Lane, Suite 456, Los Angeles, CA 90001</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <Mail size={20} className="text-primary-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Email Us</h4>
                      <p className="text-neutral-600">hello@wishingtree.com</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <Phone size={20} className="text-primary-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Call Us</h4>
                      <p className="text-neutral-600">+1 (555) 123-4567</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <Clock size={20} className="text-primary-500 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Office Hours</h4>
                      <p className="text-neutral-600">Monday - Friday: 9am - 6pm</p>
                      <p className="text-neutral-600">Saturday: 10am - 4pm</p>
                      <p className="text-neutral-600">Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="font-serif text-2xl mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-neutral-100 hover:bg-primary-100 p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-neutral-100 hover:bg-primary-100 p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.644c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                    </svg>
                  </a>
                  <a 
                    href="https://pinterest.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-neutral-100 hover:bg-primary-100 p-3 rounded-full transition-colors"
                    aria-label="Pinterest"
                  >
                    <svg className="w-6 h-6 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12">
            <h3 className="font-serif text-2xl mb-6 text-center">Find Us</h3>
            <div className="rounded-lg overflow-hidden shadow-md h-96">
              {/* Replace with actual Google Maps embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.69191521281079!3d34.02016130653036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1626345414467!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="WishingTree Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;