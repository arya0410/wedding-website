import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

// Service data
const services = [
  {
    id: 1,
    title: 'Full Wedding Planning',
    description: 'From venue selection to day-of coordination, our full planning service handles every aspect of your wedding. We work with you from the beginning to bring your vision to life.',
    image: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg',
    features: [
      'Wedding Concept & Design Development',
      'Budget Planning & Management',
      'Venue & Vendor Selection and Management',
      'Timeline Creation & Coordination',
      'Guest List Management',
      'Day-of Coordination (12 hours)',
      'Weekend Event Coordination',
      'Unlimited Meetings & Consultations'
    ]
  },
  {
    id: 2,
    title: 'Partial Planning',
    description: 'Already have some elements of your wedding planned? Our partial planning service lets us step in to help with the remaining aspects.',
    image: 'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg',
    features: [
      'Wedding Design Consultation',
      'Vendor Recommendations & Coordination',
      'Timeline Creation',
      'Month-of Coordination',
      'Final Vendor Confirmations',
      'Day-of Coordination (10 hours)',
      'Up to 5 Planning Meetings'
    ]
  },
  {
    id: 3,
    title: 'Month-of Coordination',
    description: 'For couples who have planned their own wedding but need a professional to execute their vision on the day.',
    image: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg',
    features: [
      'Detailed Timeline Creation',
      'Vendor Coordination & Confirmation',
      'Final Venue Walkthrough',
      'Rehearsal Coordination',
      'Day-of Coordination (8 hours)',
      'Setup & Breakdown Supervision',
      'Emergency Kit Provision'
    ]
  },
  {
    id: 4,
    title: 'Event Design & Decor',
    description: 'Transform your venue with our professional event design services, creating a cohesive and beautiful atmosphere.',
    image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg',
    features: [
      'Concept & Mood Board Creation',
      'Color Palette & Theme Development',
      'Floral Design & Arrangement',
      'Lighting Design',
      'Furniture & Linen Selection',
      'Table Setting & Styling',
      'Installation & Breakdown',
      'Custom Element Design'
    ]
  },
  {
    id: 5,
    title: 'Destination Weddings',
    description: 'Planning a wedding away from home? Our destination wedding service handles the unique challenges of planning from afar.',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
    features: [
      'Destination Research & Recommendations',
      'Travel & Accommodation Coordination',
      'Local Vendor Sourcing & Management',
      'Legal & Documentation Assistance',
      'Guest Experience Planning',
      'Welcome Bag Assembly',
      'On-Site Coordination (Multiple Days)',
      'Virtual Planning Sessions'
    ]
  },
  {
    id: 6,
    title: 'Corporate Events',
    description: 'Professional planning for corporate gatherings, product launches, and company celebrations.',
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg',
    features: [
      'Event Strategy & Concept Development',
      'Venue Selection & Management',
      'Budget Planning & Tracking',
      'Vendor Coordination',
      'Registration & Check-in Management',
      'Audio/Visual Coordination',
      'Food & Beverage Planning',
      'Post-Event Analysis'
    ]
  }
];

const Services = () => {
  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive wedding and event planning services tailored to your needs"
        backgroundImage="https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">How We Can Help You</h2>
            <div className="w-24 h-1 bg-primary-300 mx-auto mb-6" />
            <p className="text-neutral-600 max-w-2xl mx-auto">
              From full-service planning to day-of coordination, we offer a range of services 
              to make your special day truly unforgettable.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-white font-serif text-3xl mb-2">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-serif text-2xl md:text-3xl mb-4">{service.title}</h3>
                  <div className="w-24 h-1 bg-primary-300 mb-6" />
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <h4 className="font-medium text-lg mb-4">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-primary">
                    Get a Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-neutral-50 rounded-lg shadow-inner text-center">
            <h3 className="font-serif text-2xl mb-4">Need Something Customized?</h3>
            <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
              We understand that every event is unique. Contact us to discuss how we can tailor our services to your specific needs and vision.
            </p>
            <a href="/contact" className="btn btn-accent">
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;