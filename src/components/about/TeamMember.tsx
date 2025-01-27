// File: src/components/about/TeamMember.tsx
'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export default function TeamMember({
  name,
  role,
  bio,
  image,
  social
}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-background rounded-xl shadow-sm border border-secondary/20 overflow-hidden hover:border-primary/40 transition-all duration-200"
    >
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex justify-center space-x-4">
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text mb-1">{name}</h3>
        <p className="text-primary mb-3">{role}</p>
        <p className="text-text-light">{bio}</p>
      </div>
    </motion.div>
  );
}