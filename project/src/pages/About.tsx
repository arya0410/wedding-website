import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const About = () => {
  return (
    <div>
      <PageHeader 
        title="About WishingTree" 
        subtitle="Meet the team behind your perfect event"
        backgroundImage="https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-primary-300 mb-6" />
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Founded in 2015, WishingTree began with a simple mission: to transform ordinary events into extraordinary memories. 
                What started as a small passionate team has grown into a premier event planning company serving couples and 
                organizations throughout the region.
              </p>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Our journey has been marked by a commitment to excellence, attention to detail, and a deep understanding 
                of what makes each celebration unique. With every wedding and event, we pour our hearts into creating moments 
                that will be cherished for a lifetime.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Today, WishingTree stands as a trusted partner for couples embarking on their journey together, 
                bringing dreams to life with creativity, precision, and passion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg" 
                alt="WishingTree Team" 
                className="rounded-lg shadow-md"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-6 shadow-lg">
                <p className="font-serif text-primary-900">
                  <span className="block text-3xl font-bold">200+</span>
                  <span className="text-sm">Events Completed</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Values</h2>
              <div className="w-24 h-1 bg-primary-300 mx-auto mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="card text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Attention to Detail</h3>
                <p className="text-neutral-600">
                  We believe that perfection lies in the details. Every element of your event is meticulously planned and executed.
                </p>
              </motion.div>

              <motion.div 
                className="card text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Personalized Service</h3>
                <p className="text-neutral-600">
                  No two events are alike. We tailor our services to reflect your unique personality and vision.
                </p>
              </motion.div>

              <motion.div 
                className="card text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Timely Execution</h3>
                <p className="text-neutral-600">
                  We value your time and ensure that every phase of planning and execution happens on schedule.
                </p>
              </motion.div>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Meet Our Team</h2>
              <div className="w-24 h-1 bg-primary-300 mx-auto mb-6" />
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Our talented team of event planners, designers, and coordinators are dedicated to making your event perfect.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                    alt="Emma Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">Emma Johnson</h3>
                <p className="text-primary-600 mb-3">Founder & Lead Planner</p>
                <p className="text-neutral-600">
                  Emma brings over 15 years of experience in event planning and a passion for creating unforgettable celebrations.
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                    alt="David Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">David Chen</h3>
                <p className="text-primary-600 mb-3">Creative Director</p>
                <p className="text-neutral-600">
                  David's eye for design and attention to aesthetic details ensures every event is visually stunning.
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg" 
                    alt="Sophia Martinez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">Sophia Martinez</h3>
                <p className="text-primary-600 mb-3">Senior Coordinator</p>
                <p className="text-neutral-600">
                  Sophia's organizational skills and calm demeanor make her the perfect day-of coordinator for any event.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;