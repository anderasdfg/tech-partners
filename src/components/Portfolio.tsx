import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    image: string;
    delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, image, delay }) => (
    <motion.div
        className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, y: -5 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay }}
    >
        <div className="h-48 bg-gradient-to-br from-blue/20 to-green/20 flex items-center justify-center">
            <div className="text-6xl text-green/50">📱</div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tech.map((item, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-blue/20 text-blue text-sm rounded-full"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default function Portfolio() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Modern e-commerce solution with AI-powered recommendations",
            tech: ["React", "Node.js", "AI", "Cloud"],
            image: "/project1.jpg",
        },
        {
            title: "Mobile Banking App",
            description: "Secure mobile banking with biometric authentication",
            tech: ["React Native", "Blockchain", "Security"],
            image: "/project2.jpg",
        },
        {
            title: "IoT Dashboard",
            description: "Real-time monitoring dashboard for IoT devices",
            tech: ["Vue.js", "IoT", "Real-time", "Analytics"],
            image: "/project3.jpg",
        },
        {
            title: "AI Chatbot Platform",
            description: "Intelligent customer service automation platform",
            tech: ["Python", "AI", "NLP", "Cloud"],
            image: "/project4.jpg",
        },
    ];

    return (
        <section className="py-20" id="portfolio">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.8 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
                    <p className="text-gray-400 text-lg">
                        Technological experiences that transform businesses
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            image={project.image}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 