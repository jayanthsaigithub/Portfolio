import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const CursorEffect: React.FC = () => {
  const { x, y } = useMousePosition();
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseOver = () => setCursorVariant('hover');
    const handleMouseOut = () => setCursorVariant('default');

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive');
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const variants = {
    default: {
      x: x - 16,
      y: y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(0, 242, 255, 0.3)',
      boxShadow: '0 0 15px rgba(0, 242, 255, 0.5)',
      transition: {
        type: 'spring',
        mass: 0.6,
        damping: 30,
      },
    },
    hover: {
      x: x - 24,
      y: y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(156, 0, 255, 0.3)',
      boxShadow: '0 0 20px rgba(156, 0, 255, 0.7)',
      transition: {
        type: 'spring',
        mass: 0.6,
        damping: 30,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-screen"
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default CursorEffect;