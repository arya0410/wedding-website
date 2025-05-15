import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the data to your backend
    // For this demo, we'll just reset the form
    alert('Form submitted successfully!');
    reset();
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-serif text-2xl mb-6">Send Us a Message</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="label">Your Name *</label>
            <input
              id="name"
              type="text"
              className={`input ${errors.name ? 'border-red-500' : ''}`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="label">Your Email *</label>
            <input
              id="email"
              type="email"
              className={`input ${errors.email ? 'border-red-500' : ''}`}
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="label">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              className={`input ${errors.phone ? 'border-red-500' : ''}`}
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Event Date */}
          <div>
            <label htmlFor="eventDate" className="label">Event Date</label>
            <input
              id="eventDate"
              type="date"
              className="input"
              {...register('eventDate')}
            />
          </div>

          {/* Event Type */}
          <div>
            <label htmlFor="eventType" className="label">Event Type *</label>
            <select
              id="eventType"
              className={`input ${errors.eventType ? 'border-red-500' : ''}`}
              {...register('eventType', { required: 'Please select an event type' })}
            >
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="engagement">Engagement Party</option>
              <option value="corporate">Corporate Event</option>
              <option value="birthday">Birthday Party</option>
              <option value="other">Other</option>
            </select>
            {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType.message}</p>}
          </div>

          {/* Guest Count */}
          <div>
            <label htmlFor="guestCount" className="label">Estimated Guest Count</label>
            <select
              id="guestCount"
              className="input"
              {...register('guestCount')}
            >
              <option value="">Select Guest Count</option>
              <option value="1-50">1-50</option>
              <option value="51-100">51-100</option>
              <option value="101-200">101-200</option>
              <option value="201+">201+</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="label">Your Message *</label>
          <textarea
            id="message"
            rows={5}
            className={`input ${errors.message ? 'border-red-500' : ''}`}
            {...register('message', { required: 'Please enter your message' })}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary w-full md:w-auto">
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;