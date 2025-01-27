// File: src/components/blog/CategoryFilter.tsx
'use client';

import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-2"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
            ${category === activeCategory
              ? 'bg-primary text-white scale-105'
              : 'bg-secondary/10 text-text-light hover:bg-primary/10 hover:text-primary'
            }`}
        >
          {category}
          {category === activeCategory && (
            <motion.span
              layoutId="activePill"
              className="absolute inset-0 bg-primary rounded-full -z-10"
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
}