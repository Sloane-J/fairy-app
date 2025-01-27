// File: src/components/blog/BlogSearch.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface BlogSearchProps {
  onSearch: (query: string) => void;
}

export default function BlogSearch({ onSearch }: BlogSearchProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, onSearch]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full"
    >
      <div
        className={`relative rounded-lg transition-shadow duration-200 
          ${isFocused ? 'ring-2 ring-primary/50' : 'ring-1 ring-secondary/20'}`}
      >
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search articles..."
          className="w-full pl-12 pr-12 py-3 rounded-lg border-none focus:outline-none bg-background"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-light" />
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary/10"
            >
              <X className="h-4 w-4 text-text-light" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Search Results Preview (optional) */}
      <AnimatePresence>
        {isFocused && query.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 p-2 bg-background rounded-lg shadow-lg border border-secondary/20 z-50"
          >
            <div className="text-sm text-text-light p-2">
              Searching for "{query}"...
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}