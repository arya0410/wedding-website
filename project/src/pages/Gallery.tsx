import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import { X } from 'lucide-react';

// Gallery data
const galleryCategories = [
  { id: 'all', name: 'All' },
  { id: 'weddings', name: 'Weddings' },
  { id: 'decor', name: 'Decor' },
  { id: 'venues', name: 'Venues' },
  { id: 'corporate', name: 'Corporate' },
];

const galleryItems = [
  {
    id: 1,
    category: 'weddings',
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
    title: 'Garden Wedding',
    description: 'Elegant garden ceremony with floral arch'
  },
  {
    id: 2,
    category: 'weddings',
    image: 'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg',
    title: 'Beach Ceremony',
    description: 'Romantic sunset beach wedding setup'
  },
  {
    id: 3,
    category: 'decor',
    image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg',
    title: 'Reception Table Setting',
    description: 'Luxury tablescape with gold accents'
  },
  {
    id: 4,
    category: 'decor',
    image: 'https://images.pexels.com/photos/931155/pexels-photo-931155.jpeg',
    title: 'Floral Centerpieces',
    description: 'Stunning rose and hydrangea arrangements'
  },
  {
    id: 5,
    category: 'venues',
    image: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg',
    title: 'Grand Ballroom',
    description: 'Historic ballroom transformed for a black-tie reception'
  },
  {
    id: 6,
    category: 'venues',
    image: 'https://images.pexels.com/photos/1157386/pexels-photo-1157386.jpeg',
    title: 'Vineyard Estate',
    description: 'Rustic-elegant celebration among the vines'
  },
  {
    id: 7,
    category: 'corporate',
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg',
    title: 'Product Launch',
    description: 'Sophisticated setup for a major technology unveiling'
  },
  {
    id: 8,
    category: 'corporate',
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg',
    title: 'Annual Gala',
    description: 'Charity fundraiser with custom lighting design'
  },
  {
    id: 9,
    category: 'weddings',
    image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg',
    title: 'First Dance',
    description: 'Magical moment under custom chandeliers'
  },
  {
    id: 10,
    category: 'decor',
    image: 'https://images.pexels.com/photos/3671118/pexels-photo-3671118.jpeg',
    title: 'Ceremony Backdrop',
    description: 'Lush greenery wall with white floral accents'
  },
  {
    id: 11,
    category: 'venues',
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
    title: 'Rooftop Celebration',
    description: 'Urban chic wedding with city skyline views'
  },
  {
    id: 12,
    category: 'corporate',
    image: 'https://images.pexels.com/photos/2505367/pexels-photo-2505367.jpeg',
    title: 'Conference Setup',
    description: 'Professional arrangement for industry leaders'
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | {
    image: string;
    title: string;
    description: string;
  }>(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div>
      <PageHeader 
        title="Gallery" 
        subtitle="Browse our portfolio of beautiful events"
        backgroundImage="https://images.pexels.com/photos/3014854/pexels-photo-3014854.jpeg"
      />

      <section className="section">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary-200 text-primary-900' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedImage({
                    image: item.image,
                    title: item.title,
                    description: item.description
                  })}
                >
                  <div className="relative h-full group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Image Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  className="relative max-w-4xl max-h-[90vh] overflow-hidden"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 bg-white/20 rounded-full p-2 text-white hover:bg-white/30 transition-colors z-10"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X size={24} />
                  </button>
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-xl font-medium mb-1">{selectedImage.title}</h3>
                    <p>{selectedImage.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Gallery;