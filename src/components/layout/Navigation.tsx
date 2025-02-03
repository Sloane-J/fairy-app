"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav className="flex items-center relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-text-light hover:text-primary transition-colors duration-200"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <button
        className="md:hidden p-2 z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-between relative">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="absolute top-0 left-0 w-full h-0.5 bg-text transition-all"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-text transition-opacity"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-text transition-all"
          />
        </div>
      </button>

      {/* Mobile Navigation Menu & Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-background border-l border-secondary/20 shadow-lg flex flex-col items-center pt-20 z-50"
            >
              <div className="flex flex-col items-center w-full space-y-6">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-text-light hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/contact"
                  className="mt-4 w-5/6 text-center px-5 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Book Free Consultation
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}