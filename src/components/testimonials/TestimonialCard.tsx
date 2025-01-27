// File: src/components/testimonials/TestimonialCard.tsx
'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  category: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  image,
  content,
  rating,
  category,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-xl shadow-sm border border-secondary/20 p-6 hover:border-primary/40 transition-all duration-200"
    >
      <div className="relative">
        <div className="absolute top-0 right-0 text-primary/10">
          <Quote className="h-12 w-12" />
        </div>
        
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-primary fill-current" />
          ))}
        </div>

        <p className="text-text-light mb-6 line-clamp-4">
          {content}
        </p>

        <div className="flex items-center">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-12 w-12 rounded-full"
          />
          <div className="ml-4">
            <div className="font-semibold text-text">{name}</div>
            <div className="text-sm text-text-light">{role}</div>
            <div className="text-sm text-primary">{company}</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-secondary/20">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
            {category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}