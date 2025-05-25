import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => (
  <motion.a
    href={href}
    className="interactive text-metal-100 hover:text-neon-blue py-2 px-4 rounded-md relative overflow-hidden group"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10">{title}</span>
    <motion.div
      className="absolute inset-0 bg-metal-gradient opacity-0 group-hover:opacity-10 rounded-md"
      initial={{ scale: 0 }}
      whileHover={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  </motion.a>
);

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-300/80 backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#"
            className="interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#hero" title="Home" />
            <NavLink href="#about" title="About" />
            <NavLink href="#projects" title="Projects" />
            <NavLink href="#skills" title="Skills" />
            <NavLink href="#contact" title="Contact" />
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white interactive"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className={`md:hidden bg-dark-300/95 backdrop-blur-md absolute w-full ${menuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: menuOpen ? 1 : 0,
          height: menuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-2 p-4">
          <NavLink href="#hero" title="Home" onClick={closeMenu} />
          <NavLink href="#about" title="About" onClick={closeMenu} />
          <NavLink href="#projects" title="Projects" onClick={closeMenu} />
          <NavLink href="#skills" title="Skills" onClick={closeMenu} />
          <NavLink href="#contact" title="Contact" onClick={closeMenu} />
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;