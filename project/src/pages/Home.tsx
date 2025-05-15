import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedServices from '../components/home/FeaturedServices';
import HomeAbout from '../components/home/HomeAbout';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedServices />
      <HomeAbout />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;