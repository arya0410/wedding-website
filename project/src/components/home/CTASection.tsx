import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section 
      className="py-24 relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Make Your Dream Event a Reality?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90">
            Let's create a memorable experience that you and your guests will cherish forever.
          </p>
          <Link 
            to="/contact" 
            className="btn bg-white text-neutral-900 hover:bg-neutral-100 shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;