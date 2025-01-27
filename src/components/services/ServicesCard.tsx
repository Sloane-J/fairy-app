// File: src/components/services/ServiceCard.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  period: string;
  image: string;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  features,
  price,
  period,
  image,
  href,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-background rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:border-primary/40 transition-all duration-200"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-display font-bold text-text mb-2">
          {title}
        </h3>
        <p className="text-text-light mb-6">
          {description}
        </p>
        
        <div className="space-y-3 mb-6">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-text-light">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold text-text">{price}</span>
          <span className="ml-2 text-text-light">{period}</span>
        </div>

        <a
          href={href}
          className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors duration-200"
        >
          Learn More
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </motion.div>
  );
}