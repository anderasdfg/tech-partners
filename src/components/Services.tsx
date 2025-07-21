import React from 'react';
import { motion } from 'framer-motion';
import WebIcon from './icons/WebIcon';
import MobileIcon from './icons/MobileIcon';
import AIIcon from './icons/AIIcon';
import CloudIcon from './icons/CloudIcon';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <motion.div
    className="text-center p-6 rounded-lg"
    whileHover={{ scale: 1.05, y: -10 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-4 text-green text-6xl">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default function Services() {
  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          What We Build
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<WebIcon />}
            title="Web"
            description="Node networks that light up on hover."
          />
          <ServiceCard
            icon={<MobileIcon />}
            title="Mobile"
            description="An animated interface that comes to life."
          />
          <ServiceCard
            icon={<AIIcon />}
            title="AI"
            description="A digital brain, glowing with intelligence."
          />
          <ServiceCard
            icon={<CloudIcon />}
            title="Cloud"
            description="Interconnected digital clouds, always on."
          />
        </div>
      </div>
    </section>
  );
} 