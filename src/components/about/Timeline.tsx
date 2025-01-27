// File: src/components/about/Timeline.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const milestones = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Started our journey with a vision to transform lives through expert coaching.',
  },
  {
    year: '2015',
    title: 'Digital Expansion',
    description: 'Launched our online coaching platform to reach clients worldwide.',
  },
  {
    year: '2018',
    title: 'Award Recognition',
    description: 'Received industry recognition for excellence in coaching services.',
  },
  {
    year: '2020',
    title: 'Global Impact',
    description: 'Expanded our team and services to serve clients across 50+ countries.',
  },
  {
    year: '2024',
    title: 'Innovation Leader',
    description: 'Pioneering new coaching methodologies and digital learning experiences.',
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-display font-bold text-text mb-6">
          Our Journey
        </h2>
        <p className="text-text-light">
          Milestones that have shaped our growth and impact in the coaching industry.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-secondary/20" />

        {/* Timeline items */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="absolute left-0 right-0 h-0.5 bg-secondary/20" />
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="bg-background border border-secondary/20 rounded-lg p-6 max-w-xl">
                  <div className="text-primary font-bold mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-text mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-text-light">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}