'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BarChart, Users, Calendar } from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing Mastery',
    description: 'Master the art of digital marketing with comprehensive training in social media, content creation, and online presence.',
    icon: BarChart,
    features: ['Social Media Strategy', 'Content Creation', 'Analytics & ROI'],
    href: '/services/digital-marketing',
  },
  {
    title: 'Life Coaching Sessions',
    description: 'Transform your personal and professional life with targeted coaching sessions focused on your goals.',
    icon: Users,
    features: ['Personal Development', 'Goal Setting', 'Work-Life Balance'],
    href: '/services/life-coaching',
  },
  {
    title: 'Online Courses',
    description: 'Access comprehensive learning materials and structured courses at your own pace.',
    icon: BookOpen,
    features: ['Self-Paced Learning', 'Expert Content', 'Practice Exercises'],
    href: '/services/courses',
  },
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-text mb-6"
          >
            Services Tailored to Your Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-light"
          >
            Choose from our range of specialized services designed to help you achieve your goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-background rounded-lg shadow-sm border border-secondary/20 hover:border-primary/40 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">{service.title}</h3>
              <p className="text-text-light mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-text-light">
                    <Calendar className="h-5 w-5 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={service.href}
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}