import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const blogPosts = [
  {
    id: 1,
    title: '10 Wedding Trends to Watch in 2025',
    excerpt: 'From sustainable celebrations to tech-integrated ceremonies, discover the wedding trends that will define 2025.',
    date: 'May 15, 2024',
    readTime: '5 min read',
    category: 'Trends',
    image: 'https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg',
    slug: '/blog/wedding-trends-2025'
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Wedding Venue',
    excerpt: 'Your venue sets the tone for your entire celebration. Learn our expert tips for finding the space that perfectly matches your vision.',
    date: 'April 28, 2024',
    readTime: '7 min read',
    category: 'Planning Tips',
    image: 'https://images.pexels.com/photos/1157386/pexels-photo-1157386.jpeg',
    slug: '/blog/choose-perfect-venue'
  },
  {
    id: 3,
    title: 'Sustainable Wedding Ideas That Don\'t Compromise on Style',
    excerpt: 'Eco-conscious celebrations are on the rise. Discover how to reduce your wedding\'s environmental impact while maintaining elegance.',
    date: 'April 12, 2024',
    readTime: '6 min read',
    category: 'Eco-Friendly',
    image: 'https://images.pexels.com/photos/1345719/pexels-photo-1345719.jpeg',
    slug: '/blog/sustainable-wedding-ideas'
  },
  {
    id: 4,
    title: 'The Ultimate Wedding Day Timeline',
    excerpt: 'Create a stress-free wedding day with our proven timeline template and professional scheduling tips.',
    date: 'March 30, 2024',
    readTime: '8 min read',
    category: 'Planning Tips',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
    slug: '/blog/wedding-day-timeline'
  },
  {
    id: 5,
    title: 'Small Wedding, Big Impact: Planning an Intimate Celebration',
    excerpt: 'Micro-weddings continue to grow in popularity. Learn how to create a meaningful, luxurious experience with a smaller guest list.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Intimate Weddings',
    image: 'https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg',
    slug: '/blog/small-wedding-planning'
  },
  {
    id: 6,
    title: 'Stunning Floral Arrangements for Every Season',
    excerpt: 'Discover the best blooms for your wedding season and how to incorporate them into breathtaking arrangements.',
    date: 'February 28, 2024',
    readTime: '6 min read',
    category: 'Decor',
    image: 'https://images.pexels.com/photos/931154/pexels-photo-931154.jpeg',
    slug: '/blog/seasonal-wedding-flowers'
  },
];

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'trends', name: 'Trends' },
  { id: 'planning-tips', name: 'Planning Tips' },
  { id: 'eco-friendly', name: 'Eco-Friendly' },
  { id: 'decor', name: 'Decor & Design' },
  { id: 'intimate-weddings', name: 'Intimate Weddings' },
];

const Blog = () => {
  return (
    <div>
      <PageHeader 
        title="Wedding Inspiration & Tips" 
        subtitle="Expert advice and creative ideas for your perfect day"
        backgroundImage="https://images.pexels.com/photos/2788819/pexels-photo-2788819.jpeg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {blogPosts.map((post, index) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-serif text-xl mb-3">
                        <Link to={post.slug} className="hover:text-primary-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-neutral-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-sm text-neutral-500">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link 
                        to={post.slug} 
                        className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        Read more
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>

              <div className="mt-12 flex justify-center">
                <button className="btn btn-outline">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="font-serif text-xl mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category.id}>
                        <Link 
                          to={`/blog/category/${category.id}`}
                          className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-neutral-100 transition-colors"
                        >
                          <span>{category.name}</span>
                          <ChevronRight size={16} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured Post */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1825414/pexels-photo-1825414.jpeg" 
                      alt="Featured Post" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-500 text-accent-900 rounded-full mb-3">
                      Featured
                    </span>
                    <h3 className="font-serif text-xl mb-3">
                      <Link to="/blog/wedding-planning-guide" className="hover:text-primary-600 transition-colors">
                        The Complete Wedding Planning Guide: 12 Months to "I Do"
                      </Link>
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      Our most comprehensive planning resource to help you navigate the entire wedding journey.
                    </p>
                    <Link 
                      to="/blog/wedding-planning-guide" 
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Read the guide
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-primary-50 rounded-lg shadow-md p-6">
                  <h3 className="font-serif text-xl mb-4">Wedding Planning Tips</h3>
                  <p className="text-neutral-600 mb-4">
                    Subscribe to our newsletter for expert planning advice and inspiration delivered straight to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="input"
                    />
                    <button type="submit" className="btn btn-primary w-full">
                      Subscribe
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;