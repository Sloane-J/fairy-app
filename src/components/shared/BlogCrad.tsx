// File: src/components/shared/BlogCard.tsx
'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  image,
  category,
  slug,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-background rounded-lg shadow-sm border border-secondary/20 overflow-hidden hover:border-primary/40 transition-colors duration-200"
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-sm text-text-light">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center text-sm text-text-light">
            <Clock className="h-4 w-4 mr-1" />
            {readTime}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-text-light mb-4 line-clamp-2">{excerpt}</p>
        <a
          href={`/blog/${slug}`}
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200"
        >
          Read more
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </motion.article>
  );
}