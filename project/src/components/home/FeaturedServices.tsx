import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Wedding Planning',
    description: 'Full-service wedding planning from concept to execution.',
    image: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg',
    link: '/services',
  },
  {
    id: 2,
    title: 'Event Decor',
    description: 'Beautiful, customized decor to transform your venue.',
    image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg',
    link: '/services',
  },
  {
    id: 3,
    title: 'Day-of Coordination',
    description: 'Professional coordination to ensure your day runs perfectly.',
    image: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg',
    link: '/services',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturedServices = () => {
  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Premier Services</h2>
          <div className="w-24 h-1 bg-primary-300 mx-auto mb-6" />
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We offer a range of wedding and event planning services to make your special day truly unforgettable.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="group" 
              variants={cardVariants}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md h-[450px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                  <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
                  <p className="mb-4 opacity-90">{service.description}</p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-primary-200 hover:text-primary-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;