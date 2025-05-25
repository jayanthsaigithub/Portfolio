import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink,
  index
}) => {
  return (
    <motion.div
      className="interactive group relative overflow-hidden rounded-xl bg-dark-200 cursor-pointer border border-metal-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-metal-gradient opacity-5" />
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-dark-400/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-4 right-4 flex gap-2">
            {githubLink && (
              <motion.a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-300/80 p-2 rounded-full text-metal-100 hover:text-neon-blue transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={18} />
              </motion.a>
            )}
            {liveLink && (
              <motion.a 
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-300/80 p-2 rounded-full text-metal-100 hover:text-neon-blue transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className="relative p-6">
        <h3 className="text-xl font-medium text-metal-100 mb-2">{title}</h3>
        <p className="text-metal-300 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs py-1 px-2 rounded-full bg-dark-300 text-metal-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-neon-blue to-neon-violet transition-all duration-700 ease-out" />
    </motion.div>
  );
};

export default ProjectCard;