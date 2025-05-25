import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Code className="text-neon-blue w-6 h-6" />
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet">
        PJS
      </span>
    </motion.div>
  );
};

export default Logo;