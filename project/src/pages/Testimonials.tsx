import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const testimonials = [
  {
    id: 1,
    name: 'Emily & James',
    date: 'Wedding, June 2024',
    quote: 'Working with WishingTree was the best decision we made for our wedding. They took care of every detail and made our day absolutely perfect! Their attention to detail and creative vision transformed our venue into something magical. We received so many compliments from our guests about how beautiful everything was.',
    image: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah & Michael',
    date: 'Wedding, April 2024',
    quote: 'The team exceeded our expectations at every turn. Our guests are still talking about how beautiful everything was! From the first meeting to the big day, the WishingTree team was professional, responsive, and truly cared about making our vision come to life. I would recommend them to anyone planning a special event.',
    image: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg',
    rating: 5
  },
  {
    id: 3,
    name: 'Jessica & Alex',
    date: 'Wedding, March 2024',
    quote: 'I was stressed about planning our wedding until we found WishingTree. They made everything so easy and the result was more beautiful than I could have imagined. The day went incredibly smoothly, and we were able to just enjoy ourselves without worrying about a thing.',
    image: 'https://images.pexels.com/photos/3651814/pexels-photo-3651814.jpeg',
    rating: 5
  },
  {
    id: 4,
    name: 'Tech Innovations Inc.',
    date: 'Corporate Event, February 2024',
    quote: 'We hired WishingTree for our annual company gala, and they delivered a spectacular event. The space was transformed beautifully, the timeline was executed flawlessly, and our team members were impressed. We\'ll definitely be working with them again for future corporate events.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
    rating: 5
  },
  {
    id: 5,
    name: 'Robert & David',
    date: 'Wedding, January 2024',
    quote: 'From our first consultation to the last dance, WishingTree made our wedding planning experience effortless and enjoyable. Their team was responsive, creative, and truly understood our vision. On the day itself, everything was handled with such professionalism that we could just focus on celebrating with our loved ones.',
    image: 'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg',
    rating: 5
  },
  {
    id: 6,
    name: 'Christina & Mark',
    date: 'Wedding, November 2023',
    quote: 'We had a complex multicultural wedding with lots of moving parts, and WishingTree handled it all beautifully. They were respectful of our traditions while also bringing fresh ideas to the table. Their coordinator was always two steps ahead throughout the day, ensuring everything went according to plan.',
    image: 'https://images.pexels.com/photos/936554/pexels-photo-936554.jpeg',
    rating: 4
  },
  {
    id: 7,
    name: 'Maria & John',
    date: 'Anniversary Party, October 2023',
    quote: 'We hired WishingTree to plan our 25th wedding anniversary celebration, and they created an evening that perfectly honored our journey together. The decor was elegant, the flow of the event was perfect, and they even incorporated thoughtful touches that reflected our original wedding. It was truly special.',
    image: 'https://images.pexels.com/photos/1813257/pexels-photo-1813257.jpeg',
    rating: 5
  },
  {
    id: 8,
    name: 'Global Financial Group',
    date: 'Corporate Event, September 2023',
    quote: 'Our product launch event needed to impress industry leaders and potential clients. WishingTree created a sophisticated atmosphere that perfectly matched our brand identity while facilitating meaningful networking opportunities. The event significantly exceeded our expectations.',
    image: 'https://images.pexels.com/photos/5698854/pexels-photo-5698854.jpeg',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div>
      <PageHeader 
        title="Client Testimonials" 
        subtitle="Hear what our clients have to say about our services"
        backgroundImage="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Words From Happy Couples</h2>
            <div className="w-24 h-1 bg-primary-300 mx-auto mb-6" />
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We're honored to have been part of so many special moments. 
              Here's what our clients have to say about working with WishingTree.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{testimonial.name}</h3>
                      <p className="text-neutral-500 text-sm">{testimonial.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16}
                        className={`${
                          i < testimonial.rating 
                            ? 'text-accent-600 fill-accent-600' 
                            : 'text-neutral-300'
                        } mr-1`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-neutral-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-neutral-50 rounded-lg p-8 text-center">
            <h3 className="font-serif text-2xl mb-4">Ready to Create Your Own Story?</h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Let us help you plan an event that you and your guests will be raving about for years to come.
            </p>
            <a href="/contact" className="btn btn-primary">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;