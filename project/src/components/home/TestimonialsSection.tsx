import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Emily & James',
    date: 'June 2024',
    quote: 'Working with WishingTree was the best decision we made for our wedding. They took care of every detail and made our day absolutely perfect!',
    image: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg',
  },
  {
    id: 2,
    name: 'Sarah & Michael',
    date: 'April 2024',
    quote: 'The team exceeded our expectations at every turn. Our guests are still talking about how beautiful everything was!',
    image: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg',
  },
  {
    id: 3,
    name: 'Jessica & Alex',
    date: 'March 2024',
    quote: 'I was stressed about planning our wedding until we found WishingTree. They made everything so easy and the result was more beautiful than I could have imagined.',
    image: 'https://images.pexels.com/photos/3651814/pexels-photo-3651814.jpeg',
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section py-20 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Couples Say</h2>
          <div className="w-24 h-1 bg-primary-300 mx-auto mb-6" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-accent-600 fill-accent-600" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-serif italic text-neutral-700 mb-6">
                  "{testimonials[current].quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-lg">{testimonials[current].name}</p>
                  <p className="text-neutral-500">{testimonials[current].date}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 md:-mx-12">
            <button
              onClick={prev}
              className="rounded-full bg-white shadow-md p-2 focus:outline-none hover:bg-neutral-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="rounded-full bg-white shadow-md p-2 focus:outline-none hover:bg-neutral-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-primary-500' : 'bg-neutral-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;