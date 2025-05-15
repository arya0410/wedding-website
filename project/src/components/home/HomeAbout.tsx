import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeAbout = () => {
  return (
    <section className="section py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg" 
                alt="Wedding Planner" 
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 bg-primary-200 rounded-lg p-4 w-32 h-32 flex items-center justify-center text-center shadow-lg"
            >
              <p className="font-serif text-primary-900">
                <span className="block text-3xl font-bold">10+</span>
                <span className="text-sm">Years Experience</span>
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              We Create Extraordinary Events That Last a Lifetime
            </h2>
            
            <div className="w-24 h-1 bg-primary-300 mb-6" />
            
            <p className="text-neutral-700 mb-6 leading-relaxed">
              At WishingTree, we believe that every celebration should be as unique as the individuals hosting it. 
              Our dedicated team of event planners brings creativity, precision, and passion to every project.
            </p>
            
            <p className="text-neutral-700 mb-6 leading-relaxed">
              From intimate gatherings to grand celebrations, we handle every detail with care and attention, 
              ensuring your special day unfolds exactly as you've envisioned it.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Personalized Services</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Professional Team</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Creative Solutions</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Attention to Detail</span>
              </div>
            </div>
            
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;