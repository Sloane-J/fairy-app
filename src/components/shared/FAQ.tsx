// File: src/components/shared/FAQ.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

export default function FAQ({ items, title, description }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {(title || description) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl font-display font-bold text-text mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-text-light">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 bg-background rounded-lg border border-secondary/20 hover:border-primary/40 transition-colors duration-200"
            >
              <span className="text-left font-medium text-text">
                {item.question}
              </span>
              <span className="ml-6 flex-shrink-0 text-primary">
                {openIndex === index ? (
                  <Minus className="h-5 w-5" />
                ) : (
                  <Plus className="h-5 w-5" />
                )}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-background-alt rounded-lg mt-2 text-text-light">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}