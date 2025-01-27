// File: src/components/home/Testimonials.tsx
'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Digital Marketing Manager',
    image: '/placeholder.svg?height=96&width=96',
    content: 'The coaching program transformed my approach to digital marketing. The personalized guidance and practical strategies helped me achieve remarkable results.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Entrepreneur',
    image: '/placeholder.svg?height=96&width=96',
    content: 'As a business owner, the insights and support I received were invaluable. The coaching helped me streamline my operations and grow my online presence.',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'Content Creator',
    image: '/placeholder.svg?height=96&width=96',
    content: 'The structured approach to personal development and digital skills has been game-changing. I have seen tremendous growth both personally and professionally.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-text mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-light"
          >
            Success stories from individuals who have transformed their lives and businesses through our coaching programs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-8 shadow-sm border border-secondary/20"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-primary fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-text-light mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-text">
                    {testimonial.name}
                  </h3>
                  <p className="text-text-light">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/testimonials"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
          >
            View All Success Stories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
