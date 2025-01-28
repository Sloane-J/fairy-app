// File: src/components/services/ServiceFeatures.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <div className="space-y-24">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`grid md:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? 'md:grid-flow-dense' : ''
          }`}
        >
          <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
            <h3 className="text-2xl font-display font-bold text-text mb-4">
              {feature.title}
            </h3>
            <p className="text-text-light mb-6">
              {feature.description}
            </p>
            <ul className="space-y-4">
              {feature.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-text-light">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}