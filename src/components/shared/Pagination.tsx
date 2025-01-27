// File: src/components/shared/Pagination.tsx
'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center items-center space-x-2"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-secondary/20 text-text-light hover:border-primary/40 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="flex items-center space-x-2">
        {pages.map((page) => {
          const isActive = page === currentPage;
          const isFirstOrLast = page === 1 || page === totalPages;
          const isNearCurrent = Math.abs(page - currentPage) <= 1;
          const showEllipsis = !isFirstOrLast && !isNearCurrent;

          if (showEllipsis) {
            if (page === currentPage - 2 || page === currentPage + 2) {
              return <span key={page} className="px-2 text-text-light">...</span>;
            }
            return null;
          }

          return (
            <motion.button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                ${isActive
                  ? 'bg-primary text-white'
                  : 'border border-secondary/20 text-text-light hover:border-primary/40 hover:text-primary'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </motion.button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-secondary/20 text-text-light hover:border-primary/40 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </motion.nav>
  );
}