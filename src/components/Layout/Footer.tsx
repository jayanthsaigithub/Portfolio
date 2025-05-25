import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-400 border-t border-metal-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-blue opacity-5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-violet opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#" className="flex items-center gap-2">
              <Code className="text-neon-blue" />
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet">
                PJS
              </span>
            </a>
            <p className="text-metal-400 mt-2 text-sm">
              © {new Date().getFullYear()} | All rights reserved
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-8 text-center md:text-left"><a href="#about" className="text-metal-300 hover:text-neon-blue transition-colors">About</a><a href="#projects" className="text-metal-300 hover:text-neon-blue transition-colors">Projects</a><a href="#skills" className="text-metal-300 hover:text-neon-blue transition-colors">Skills</a><a href="#contact" className="text-metal-300 hover:text-neon-blue transition-colors">Contact</a></div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-6 border-t border-metal-800 text-center text-sm text-metal-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Designed and built with ❤️
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;