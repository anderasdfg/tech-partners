import React from 'react';
import { motion } from 'framer-motion';

interface TagProps {
  children: React.ReactNode;
  delay: number;
}

const Tag: React.FC<TagProps> = ({ children, delay }) => (
  <motion.div
    className="bg-blue/20 text-white py-2 px-6 rounded-full text-lg"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ amount: 0.8 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export default function Approach() {
  return (
    <section className="py-20 relative overflow-hidden" id="approach">
      <div className="absolute inset-0 z-0">
        {/* Animated background (e.g., flowing code or data) */}
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          Our Approach
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Tag delay={0}>Scalable</Tag>
          <Tag delay={0.2}>Flexible</Tag>
          <Tag delay={0.4}>Secure</Tag>
          <Tag delay={0.6}>Intelligent</Tag>
        </div>
      </div>
    </section>
  );
} 