'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Zap } from 'lucide-react';

const features = [
  {
    name: 'Personalized Approach',
    description: 'Tailored coaching strategies designed specifically for your goals and challenges.',
    icon: Target,
  },
  {
    name: 'Expert Guidance',
    description: 'Learn from years of experience in digital marketing and personal development.',
    icon: Users,
  },
  {
    name: 'Practical Results',
    description: 'Focus on actionable steps and measurable outcomes for your success.',
    icon: Zap,
  },
];

export default function Introduction() {
  return (
    <section className="py-24 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text mb-6">
              Transform Your Journey with
              <span className="block text-primary">Professional Guidance</span>
            </h2>
            <p className="text-lg text-text-light mb-8">
              Whether you're looking to excel in digital marketing or seeking personal growth,
              our comprehensive coaching programs provide the tools and support you need to succeed.
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200"
            >
              Learn more about our approach
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 sm:grid-cols-2 lg:gap-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 bg-background rounded-lg shadow-sm border border-secondary/20 
                  ${index === features.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{feature.name}</h3>
                <p className="text-text-light">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}