import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-400">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-blue opacity-10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i + 5}
            className="absolute rounded-full bg-neon-violet opacity-10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.h2
            className="text-metal-100 text-lg md:text-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-metal-200 to-metal-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Jayanthsai Paladi
          </motion.h1>

          <motion.div
            className="relative h-12 overflow-hidden w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {["Developer", "Designer", "Creator"].map((text, index) => (
              <motion.h3
                key={text}
                className="text-neon-blue text-xl md:text-2xl font-medium absolute inset-0 flex items-center justify-center"
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                exit={{ y: -60 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.5 + 0.7,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                {text}
              </motion.h3>
            ))}
          </motion.div>

          <motion.p
            className="max-w-xl text-metal-200 mt-8 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            I specialize in creating cloud-native platforms and DevOps solutions that enhance agility, streamline automation, and optimize operational efficiency.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="interactive bg-gradient-to-r from-neon-blue to-neon-violet text-white py-3 px-6 rounded-lg font-medium hover:shadow-neon-blue transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1Awp4S764damPMpAtRpXHePd09vgCpoFg/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex items-center gap-2 border border-metal-700 text-metal-100 py-3 px-6 rounded-lg font-medium hover:border-neon-blue hover:text-neon-blue transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              Resume
            </motion.a>
          </motion.div>

          <motion.a
            href="#about"
            className="interactive rounded-full bg-gradient-to-r from-neon-blue to-neon-violet p-[1px] mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-dark-300 rounded-full p-2">
              <ChevronDown className="text-white w-6 h-6" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;